import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../usersSlice";

export default function SearchBar() {
  const search = useSelector(
    state => state.users.search
  );
  const dispatch = useDispatch();

  return (
    <>
			
    	<input
	      type="text"
	      placeholder="Пошук за прізвищем..."
	      value={search}
	
	      onChange={(e) =>
	        dispatch(
	          setSearch(e.target.value)
	        )
	      }
	    />
    </>
  );
}