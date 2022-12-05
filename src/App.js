import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './pages/About/About';
import AdmitForm from './pages/AdmitForm';
import Blogs from './pages/Blog/Blogs';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
// import Login from './pages/Login';
// import logo from './assets/logo.jpg'
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Notice from './pages/Notice';
import Events from './pages/Event/Events';
import CollageHistory from './pages/About/CollageHistory';
import GovBody from './components/About/GovBody';
import Gallery from './pages/Gallery';
import Mujib from './pages/Mujib';
import VoiceOfChairman from './pages/About/VoiceOfChairman';
import VoiceOfPrincipal from './pages/About/VoiceOfPrincipal';
import MissionVision from './pages/About/MissionVision';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import RequireAuth from './pages/authentication/RequireAuth';
import Settings from './pages/settings/Settings';
import Profile from './pages/settings/Profile';
import Users from './pages/settings/Users';
import 'react-toastify/dist/ReactToastify.css';
import ArticlesSetting from './pages/settings/articlesSetting';
import Blog from './pages/Blog/Blog';
import BlogsSetting from './pages/settings/BlogsSetting';
import NoticeSetting from './pages/settings/NoticeSetting';

function App() {
	// const [user] = useAuthState(auth);
	// console.log(user);
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
				<Route path="/voiceOfChairman" element={<VoiceOfChairman />} />
				<Route path="/voiceOfPrincipal" element={<VoiceOfPrincipal />} />
				<Route path="/mission&vision" element={<MissionVision />} />
				<Route path="/history" element={<CollageHistory />} />
				<Route path="/governing" element={<GovBody />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blog/:id" element={<Blog />} />
				<Route path="/events" element={<Events />} />
				<Route path="/notice" element={<Notice />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/mujib" element={<Mujib />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/settings"
					element={
						<RequireAuth>
							<Settings />
						</RequireAuth>
					}
				>
					<Route index element={<Profile />} />
					<Route path="/settings/notice" element={<NoticeSetting />} />
					<Route path="/settings/blogs" element={<BlogsSetting />} />
					<Route path="/settings/articles" element={<ArticlesSetting />} />
					<Route path="/settings/users" element={<Users />} />
				</Route>
				{/* <Route path="/register" element={<Registration />} /> */}
			</Routes>
			<Footer />
			<ToastContainer />
		</div>
	);
}

export default App;
