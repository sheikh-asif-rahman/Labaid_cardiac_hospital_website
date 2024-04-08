import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import Title from "../components/Title/Title";
import SmallCards from "../components/SmallCards/SmallCards";
import Footer from "../components/Footer/Footer.jsx";
// image
import service1 from "../assets/MyImage/service1.png";
import service2 from "../assets/MyImage/service2.png";
import service3 from "../assets/MyImage/service3.png";
import service4 from "../assets/MyImage/service4.png";
import service5 from "../assets/MyImage/service5.png";
import service6 from "../assets/MyImage/service6.png";
import service7 from "../assets/MyImage/service7.png";
import service8 from "../assets/MyImage/service8.png";

const OurServicePage = () => {
  const majordisciplines = [
    {
      text: "Accident And Emergency",
      details:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      text: "Anaesthesiology",
      details:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      text: "BUrn & Plastic Surgery",
      details:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      text: "Cardiothoracic And Vascular Surgery",
      details:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      text: "Cath Lab",
      details:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      text: "Chemotherapy",
      details:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      text: "Colorectal Surgery",
      details:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      text: "Coronary Care Unit - CCU",
      details:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    // Add more card data objects here as needed
  ];
  return (
    <div>
      <Headline />
      <NavigationBar />
      <Title subtitle="Services" title="Major Disciplines" />
      <SmallCards items={majordisciplines} />
      <Footer />
    </div>
  );
};

export default OurServicePage;
