import React from 'react';
import Marquee from 'react-fast-marquee';
import WelcomeImage from './WelcomeImage';
import AboutCollege from './AboutCollege';
import Cards from './Cards';
import Carousel from './Carousel';
import Facility from './Facility';
import MarqueeText from './MarqueeText';
import ContactAddress from '../Contact/ContactAddress';
import ContactForm from '../Contact/ContactForm';
import Map from '../Contact/Map';
import Footer from '../../components/Footer';
import '../../Fonts.css'
import Slider from "./Slider";
import MySlider from "./Slider";

// import Contact from "./Contact";

function Home() {
    return (
        <div>
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
                    <MarqueeText />
                </Marquee>
            </div>
            <div className="h-full  ">
                {/*<Carousel />*/}
                <MySlider />
            </div>
            <Facility />
            <AboutCollege />
            <Cards />
            <hr className="mt-16 h-[2px] bg-gray-300" />
            <div className="contact">
                <div className="flex flex-col md:flex-row my-24">
                    <ContactAddress />
                    <ContactForm />
                </div>
                <div>
                    <Map />
                </div>
            </div>
            {/*<WelcomeImage />*/}
            <Footer />
        </div>
    );
}

export default Home;
