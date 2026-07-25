import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import images from "./assets/imgs"

export default function PhoneBookApp() {
	const imgs = {
		img1: './images/1.png',
		img2: './images/2.png',
	}
	

  return (
    <div className="container">
      <h1>
        Телефонна книга
      </h1>

      <SearchBar />
      <UserForm />
      <UserList/>

			<img src={images[imgs.img1]} alt="" />
			<img src={images[imgs.img2]} alt="" />
			

			<img src={`${import.meta.env.BASE_URL}/images/3.png`} alt="" />
			<img src="./images/3.png" alt="" />
    </div>
  );
}

