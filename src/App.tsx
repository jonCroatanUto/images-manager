import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavbarComp from "./components/Navbar";
// import { fetchUserData } from "./redux/userReducer/actions";
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const isUser = localStorage.getItem("userLoged");
  //   if (isUser != null) {
  //     console.log(JSON.parse(isUser));
  //     dispatch(fetchUserData(JSON.parse(isUser)));
  //   }
  // }, []);

  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
