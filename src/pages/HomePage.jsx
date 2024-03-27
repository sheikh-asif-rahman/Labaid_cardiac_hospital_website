import React, { useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Headline from "../components/Headline/Headline";
import Home from "../components/Home/Home";
import Title from "../components/Title/Title";
import Programs from "../components/Programs/Programs";
import About from "../components/About/About";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import SliderConsultants from "../components/SliderConsultants/SliderConsultants.jsx";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Headline />
      <NavigationBar />
      <Home />
      <Title subtitle="Services" title="We Like To Help" />
      <Programs />
      <About
        setPlayState={setPlayState}
        isVisible={true}
        aboutdetails={
          "Labaid Cardiac Hospital, having been into operations since 13th of July, 2004, is the 1st NABH International accredited hospital in Bangladesh. A dedicated and proud team of healthcare professionals including Consultants, Medical Officers, Nurses and other support staff strive relentlessly to deliver quality healthcare service aimed at best clinical outcome with care. Our visionary and value-driven leadership promotes patients’ wellbeing ahead of everything else. Labaid Cardiac Hospital has the privilege of performing nearly 12,000 Cardiac Surgeries, more than 12,000 Coronary Angioplasties, 50,000 Coronary Angiograms, and about 5,000 other Cath Procedures with an overall success rate of 99%, which is considered very high in the industry. "
        }
      />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Title
        subtitle="Cardiology & Cardiac Surgery"
        title="Leading Consultants"
      />
      <SliderConsultants />
      <Title subtitle="Contact Us" title="Get In Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
