import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  search: "",
  editingIndex: null,
};

const usersSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    addUser(state, action) {
      if (state.editingIndex !== null) {
        state.users[state.editingIndex] = action.payload;
        state.editingIndex = null;
      } else {
        state.users.push(action.payload);
      }

      localStorage.setItem(
        "users",
        JSON.stringify(state.users)
      );
    },

    deleteUser(state, action) {
      state.users = state.users.filter(
        (_, index) => index !== action.payload
      );

      localStorage.setItem(
        "users",
        JSON.stringify(state.users)
      );
    },

    editUser(state, action) {
      state.editingIndex = action.payload;
    },

    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  addUser,
  deleteUser,
  editUser,
  setSearch,
} = usersSlice.actions;

export default usersSlice.reducer;