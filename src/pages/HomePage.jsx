import React, { useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Headline from "../components/Headline/Headline";
import Home from "../components/Home/Home";
import Title from "../components/Title/Title";
import Programs from "../components/Programs/Programs";
import About from "../components/About/About";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

import SliderConsultants from "../components/SliderConsultants/SliderConsultants";
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
      <About setPlayState={setPlayState} />
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
