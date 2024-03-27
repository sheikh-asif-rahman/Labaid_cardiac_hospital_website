import React, { useState } from "react";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Headline from "./components/Headline/Headline";
import Consultants from "./components/Consultants/Consultants";
import Home from "./components/Home/Home";
import NavigationBar from "./components/Navbar/NavigationBar";
import HomePage from "./pages/HomePage";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    // <div>
    //   <Headline />
    //   <NavigationBar />
    //   <Home />
    //   <Title subtitle="Services" title="We Like To Help" />
    //   <Programs />
    //   <Title       subtitle="Test" title="We Like To Help" />

    //   <Title subtitle="Cardiology" title="Leading Consultants" />
    
    //   <About setPlayState={setPlayState} />
    //   <VideoPlayer playState={playState} setPlayState={setPlayState} />
    //   <Title subtitle="Contact Us" title="Get in Touch" />
    //   <Contact />
    //   <Footer />
    //   {/*

    //     <Title subtitle="Gallery" title="Campus Photos" />
    //     <Campus />
    //     <Title subtitle="TESTIMONIALS" title="What Student Says" />
    //     <Testimonials name1={'hello'} image1={doctor2} detail1={'hekki'} />

    //   </div>
    //   */}
    // </div>
    <div>
      <HomePage />
    </div>
  );
};

export default App;
