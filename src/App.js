import Marquee from "react-fast-marquee";
import { Route, Routes } from "react-router-dom";
import logo from "../src/assets/logo.jpg";
import "./App.css";
// import MarqueeText from "./components/Home/MarqueeText";
import Nav from "./components/Home/Nav";
import About from "./pages/About/About";
import AdmitForm from "./pages/AdmitForm/AdmitForm";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <div className="mx-auto bg-white sticky top-0 z-50">
        <img className="w-3/5 h-20 ml-60" src={logo} alt="" />
      </div>
      <Nav></Nav>
      <Marquee direction="left">
        <MarqueeText></MarqueeText>
      </Marquee>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/admitform1" element={<AdmitForm></AdmitForm>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="regi" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
