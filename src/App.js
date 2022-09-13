import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import AdmitForm from "./pages/AdmitForm/AdmitForm";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
// import logo from './assets/logo.jpg'
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      {/* <div className="bg-white lg:hidden">
        <img className="w-3/5 h-20 mx-auto" src={logo} alt="" />
      </div> */}
      <Logo display="hidden"/>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/admission" element={<AdmitForm></AdmitForm>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/event" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/regi" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
