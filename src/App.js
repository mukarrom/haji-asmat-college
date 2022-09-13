import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import AdmitForm from "./pages/AdmitForm";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
// import logo from './assets/logo.jpg'
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import NoticeCard from "./components/Notice/NoticeCard";
import Notice from "./pages/Notice";

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
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/regi" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
