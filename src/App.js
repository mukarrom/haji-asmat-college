import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import About from './pages/About/About';
import AdmitForm from './pages/AdmitForm/AdmitForm';
import Blogs from './pages/Blog/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './components/Navbar/Navbar';
import Notices from './pages/Notice/Notices';
import Events from './pages/Event/Events';
import CollageHistory from './pages/About/CollageHistory';
import Gallery from './pages/Gallery/Gallery';
import Mujib from './pages/Mujib/Mujib';
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
// import ArticlesSetting from './pages/settings/articlesSetting';
import BlogDetails from './pages/Blog/BlogDetails';
// import BlogsSetting from './pages/settings/BlogsSetting';
import EventDetails from './pages/Event/EventDetails';
import NoticeDetails from './pages/Notice/NoticeDetails';
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
import GoverningBodies from "./pages/About/GoverningBodies";
import AddGovBody from "./pages/settings/GoverningBody/AddGovBody";
import UpdateGovBody from "./pages/settings/GoverningBody/UpdateGovBody";

function App() {
  // const [user] = useAuthState(auth);
  // console.log(user);
  // const [admin, adminLoading] = useAdmin(user);
  return (
    <div className="font-kalpurush">
      {/*<Logo display="hidden" />*/}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admission" element={<RequireAuth><AdmitForm/></RequireAuth>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/voiceOfChairman" element={<VoiceOfChairman/>}/>
        <Route path="/voiceOfPrincipal" element={<VoiceOfPrincipal/>}/>
        <Route path="/mission&vision" element={<MissionVision/>}/>
        <Route path="/history" element={<CollageHistory/>}/>
        <Route path="/gov_body" element={<GoverningBodies/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/event/:id" element={<EventDetails/>}/>
        <Route path="/notice" element={<Notices/>}/>
        <Route path="/notice/:id" element={<NoticeDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/mujib" element={<Mujib/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <RequireAdmin>
                <Settings/>
              </RequireAdmin>
            </RequireAuth>
          }
        >
          <Route index element={<Users/>}/>
          <Route path="/settings/notice/add" element={<AddNotice/>}/>
          <Route
            path="/settings/notice/update/:id"
            element={<UpdateNotice/>}
          />
          <Route path="/settings/gallery/add" element={<AddImage/>}/>
          <Route
            path="/settings/gallery/update/:id"
            element={<UpdateImage/>}
          />
          <Route
            path="/settings/about/history/:id"
            element={<UpdateHistory/>}
          />
          <Route
            path="/settings/about/chairman/:id"
            element={<UpdateChairman/>}
          />
          <Route
            path="/settings/about/principal/:id"
            element={<UpdatePrincipal/>}
          />
          <Route
            path="/settings/about/mission/:id"
            element={<UpdateMission/>}
          />
          <Route
            path="/settings/gov_body/add"
            element={<AddGovBody/>}
          />
          <Route
            path="/settings/gov_body/update/:id"
            element={<UpdateGovBody/>}
          />
          <Route path="/settings/blog/update/:id" element={<UpdateBlog/>}/>
          <Route path="/settings/blog/add" element={<AddBlog/>}/>
          <Route path="/settings/event/add" element={<AddEvent/>}/>
          <Route path="/settings/event/update/:id" element={<UpdateEvent/>}/>
          {/* <Route path="/settings/notice"  element={<NoticeSetting />} /> */}
          {/*<Route path="/settings/blogs" element={<BlogsSetting/>}/>*/}
          {/*<Route path="/settings/articles" element={<ArticlesSetting/>}/>*/}
        </Route>
      </Routes>
      {/*  <Footer />  */}
      <ToastContainer/>
    </div>
  );
}

export default App;
