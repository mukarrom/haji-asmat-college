import React from 'react';
import Marquee from 'react-fast-marquee';
import AboutCollege from './AboutCollege';
import Cards from './Cards';
import MarqueeText from './MarqueeText';
import ContactAddress from '../Contact/ContactAddress';
import ContactForm from '../Contact/ContactForm';
import Map from '../Contact/Map';
import Footer from '../../components/Footer';
import '../../Fonts.css'
import MySlider from "./Slider";
import GoverningBody from "./GoverningBody";
import {Link} from "react-router-dom";

// import Contact from "./Contact";

function Home() {
  return (
    <div className="bg-base-100">
      <div className="bg-base-100 w-full flex flex-row-reverse">
        <div className="bg-secondary p-2 text-white font-bold font-bn-hand text-2xl">
          নোটিশ
        </div>
        <Marquee
          direction="left"
          pauseOnHover={true}
          speed={10}
          gradient={false}
        >
          <MarqueeText/>
        </Marquee>
      </div>
      <div className="h-full">
        {/*<Carousel />*/}
        <MySlider/>
      </div>
      {/*<Facility />*/}
      <div
        className="bg-light-red w-full py-2 font-bold text-white text-4xl font-bn-hand flex justify-center items-center">
        <span>এক নজরে</span>
      </div>
      <AboutCollege/>
      {/*--------------------- government body --------------------*/}
      <section>
        <div
          className="bg-light-red w-full py-2 font-bold text-white text-4xl font-bn-hand flex justify-center items-center">
          <span>গভর্নিং বডি</span>
        </div>
        <div className="my-8">
          <GoverningBody/>
        </div>
        <div className="flex justify-center">
          <Link to="/gov_body" className="btn btn-outline btn-primary">আরও...</Link>
        </div>
      </section>
      <Cards/>
      <hr className="mt-16 h-[2px] bg-gray-300"/>
      <div className="contact">
        <div className="flex flex-col md:flex-row my-24">
          <ContactAddress/>
          <ContactForm/>
        </div>
        <div>
          <Map/>
        </div>
      </div>
      {/*<WelcomeImage />*/}
      <Footer/>
    </div>
  );
}

export default Home;
