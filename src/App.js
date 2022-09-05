import "./App.css";
import Marquee from "react-fast-marquee";
import logo from "../src/assets/logo.jpg";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Nav from "./components/Home/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import MarqueeText from "./components/Home/MarqueeText";
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
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="regi" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
