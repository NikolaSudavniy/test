import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  editUser,
  deleteUser
} from "../usersSlice";
import "./UserList.css"

export default function UserList() {
  const users = useSelector(
    state => state.users.users
  );
  const search = useSelector(
    state => state.users.search
  );

	// const {users, search} = useSelector(
  //   state => state.users
  // );

  const dispatch = useDispatch();
	const filteredUsers = users.filter(
    user =>
      user.lastName
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

  return (
		<>
			<h2 className="item">Lorem, ipsum dolor. LIST</h2>
	    <table>
	      <thead>
	        <tr>
	          <th>Ім'я</th>
	          <th>Прізвище</th>
	          <th>Email</th>
	          <th>Телефон</th>
	          <th>Дії</th>
	        </tr>
	      </thead>
	      <tbody>
	      {
	        filteredUsers.map(
	          (user,index)=>(
	          <tr key={index}>
	            <td>{user.firstName}</td>
	            <td>{user.lastName}</td>
	            <td>{user.email}</td>
	            <td>{user.phone}</td>
	            <td>
	              <button
	                onClick={()=>
	                  dispatch(
	                    editUser(index)
	                  )
	                }
	              >
	                Редагувати
	              </button>
	
	              <button
	                onClick={()=>
	                  dispatch(
	                    deleteUser(index)
	                  )
	                }
	              >
	                Видалити
	              </button>
	            </td>
	          </tr>
	        ))
	      }
	      </tbody>
	    </table>
		</>
  );
}