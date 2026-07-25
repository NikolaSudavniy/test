import { useState, useEffect } from "react";
import { 
  useSelector,
  useDispatch
} from "react-redux";
import { addUser } from "../usersSlice";
import classes from "./UserForm.module.css"

export default function UserForm() {
	// const{users, editingIndex, dispach} = useContext(userConext)

  const users = useSelector(
    state => state.users.users
  );
  const editingIndex = useSelector(
    state => state.users.editingIndex
  );
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if(editingIndex !== null){
      setForm(
        users[editingIndex]
      );
    }
  }, [editingIndex, users]);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = ()=>{
		dispatch(
      addUser(form)
    );

    setForm({
      firstName:"",
      lastName:"",
      email:"",
      phone:""
    });
  };

  return (
    <>
			<h2 className={`${classes.active} ${classes.item}`}>Lorem, ipsum dolor.</h2>
    	<div className="form">
	      <input
	        name="firstName"
	        placeholder="Ім'я"
	        value={form.firstName}
	        onChange={handleChange}
	      />
	
	      <input
	        name="lastName"
	        placeholder="Прізвище"
	        value={form.lastName}
	        onChange={handleChange}
	      />
	
	      <input
	        name="email"
	        placeholder="Email"
	        value={form.email}
	        onChange={handleChange}
	      />
	
	      <input
	        name="phone"
	        placeholder="Телефон"
	        value={form.phone}
	        onChange={handleChange}
	      />
	
	      <button onClick={handleSubmit}>
	        {
	          editingIndex !== null
	          ? "Оновити"
	          : "Додати"
	        }
	      </button>
	    </div>
    </>
  );
}