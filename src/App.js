import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './pages/About/About';
import AdmitForm from './pages/AdmitForm';
import Blogs from './pages/Blog/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import 'react-datepicker/dist/react-datepicker.css';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Notices from './pages/Notice/Notices';
import Events from './pages/Event/Events';
import CollageHistory from './pages/About/CollageHistory';
import GovBody from './components/About/GovBody';
import Gallery from './pages/Gallery/Gallery';
import Mujib from './pages/Mujib';
import VoiceOfChairman from './pages/About/VoiceOfChairman';
import VoiceOfPrincipal from './pages/About/VoiceOfPrincipal';
import MissionVision from './pages/About/MissionVision';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import RequireAuth from './pages/authentication/RequireAuth';
import Settings from './pages/settings/Settings';
import Profile from './pages/Profile/Profile';
import Users from './pages/settings/Users/Users';
import 'react-toastify/dist/ReactToastify.css';
import ArticlesSetting from './pages/settings/articlesSetting';
import BlogDetails from './pages/Blog/BlogDetails';
import BlogsSetting from './pages/settings/BlogsSetting';
import EventDetails from './pages/Event/EventDetails';
import NoticeDetails from './pages/Notice/NoticeDetails';
import TestSetting from './pages/settings/Test/TestSetting';
import UploadTest from './pages/settings/Test/UploadTest';
import UpdateTest from './pages/settings/Test/UpdateTest';
import TestPreview from './pages/settings/Test/TestPreview';
import RequireAdmin from './pages/authentication/RequireAdmin';
import AddNotice from './pages/settings/Notice/AddNotice';
import UpdateNotice from './pages/settings/Notice/UpdateNotice';
import AddImage from './pages/settings/Gallery/AddImage';
import UpdateImage from './pages/settings/Gallery/UpdateImage';
import UpdateHistory from './pages/settings/About/UpdateHistory';
import UpdateChairman from './pages/settings/About/UpdateChairman';
import UpdatePrincipal from './pages/settings/About/UpdatePrincipal';
import UpdateMission from './pages/settings/About/UpdateMission';
import UpdateBlog from './pages/settings/blogs/UpdateBlog';
import AddBlog from './pages/settings/blogs/AddBlog';
import AddEvent from "./pages/settings/Events/AddEvent";
import UpdateEvent from "./pages/settings/Events/UpdateEvent";
import './App.css';

function App() {
	// const [user] = useAuthState(auth);
	// console.log(user);
	// const [admin, adminLoading] = useAdmin(user);
	return (
		<div>

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
				<Route path="/blog/:id" element={<BlogDetails />} />
				<Route path="/events" element={<Events />} />
				<Route path="/event/:id" element={<EventDetails />} />
				<Route path="/notice" element={<Notices />} />
				<Route path="/notice/:id" element={<NoticeDetails />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/mujib" element={<Mujib />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
				<Route
					path="/settings"
					element={
						<RequireAuth>
							<RequireAdmin>
								<Settings />
							</RequireAdmin>
						</RequireAuth>
					}
				>
					<Route index element={<Users />} />
					<Route path="/settings/notice/add" element={<AddNotice />} />
					<Route
						path="/settings/notice/update/:id"
						element={<UpdateNotice />}
					/>
					<Route path="/settings/gallery/add" element={<AddImage />} />
					<Route
						path="/settings/gallery/update/:id"
						element={<UpdateImage />}
					/>
					<Route
						path="/settings/about/history/:id"
						element={<UpdateHistory />}
					/>
					<Route
						path="/settings/about/chairman/:id"
						element={<UpdateChairman />}
					/>
					<Route
						path="/settings/about/principal/:id"
						element={<UpdatePrincipal />}
					/>
					<Route
						path="/settings/about/mission/:id"
						element={<UpdateMission />}
					/>
					<Route path="/settings/blog/update/:id" element={<UpdateBlog />} />
					<Route path="/settings/blog/add" element={<AddBlog />} />
					<Route path="/settings/event/add" element={<AddEvent />} />
					<Route path="/settings/event/update/:id" element={<UpdateEvent />} />
					{/* <Route path="/settings/notice"  element={<NoticeSetting />} /> */}
					<Route path="/settings/blogs" element={<BlogsSetting />} />
					<Route path="/settings/articles" element={<ArticlesSetting />} />
					<Route path="/settings/test" element={<TestSetting />}>
						<Route index element={<UploadTest />} />
						<Route path="/settings/test/update/:id" element={<UpdateTest />} />
						{/* <Route path="/settings/test/delete" element={<DeleteTest />}/> */}
						<Route path="/settings/test/preview" element={<TestPreview />} />
					</Route>
				</Route>
			</Routes>
			{/*  <Footer />  */}
			<ToastContainer />
		</div>
	);
}

export default App;
