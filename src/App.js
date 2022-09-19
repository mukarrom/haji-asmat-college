import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AdmitForm from './pages/AdmitForm';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
// import logo from './assets/logo.jpg'
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Notice from './pages/Notice';
import Events from './pages/Events';
import CollageHistory from './components/About/CollageHistory';
import GovBody from './components/About/GovBody';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
      {/* <div className="bg-white lg:hidden">
        <img className="w-3/5 h-20 mx-auto" src={logo} alt="" />
      </div> */}
      <Logo display="hidden" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admission" element={<AdmitForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<CollageHistory />} />
        <Route path="/governing" element={<GovBody />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
