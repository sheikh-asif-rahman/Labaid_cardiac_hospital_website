import React, { useState } from "react";
import "./Labaid.css";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import About from "../components/About/About.jsx";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Title from "../components/Title/Title.jsx";
import SmallCards from "../components/SmallCards/SmallCards.jsx";
import Footer from "../components/Footer/Footer.jsx";

import cabg from "../assets/MyImage/cabg.jpg";
import chd from "../assets/MyImage/chd.jpg";
import luad from "../assets/MyImage/luadimplantation.jpg";

import intervention from "../assets/MyImage/intervention.jpg";
import electrophysiology from "../assets/MyImage/electrophysiology.jpg";
import rhythm from "../assets/MyImage/rhythm.jpg";
import coronary from "../assets/MyImage/coronary.jpg";

import vipcabins from "../assets/MyImage/vipcabins.jpg";
import deluxecabins from "../assets/MyImage/deluxe.jpg";
import highcare from "../assets/MyImage/highcare.jpg";
import stepdown from "../assets/MyImage/stepdown.jpg";
import strokecarebeds from "../assets/MyImage/strokecarebeds.jpg";
import bedcardiacicu from "../assets/MyImage/bedcardiacicu.jpg";
import worldclasscardiacot from "../assets/MyImage/worldclasscardiacot.jpg";
import bedccu from "../assets/MyImage/bedccu.jpg";
import moderncathlabs from "../assets/MyImage/catlab.jpg";
import bedpostcath from "../assets/MyImage/bedpostcath.jpg";

const cardiacsurgery = [
  {
    text: "CABG",
    image: cabg,
  },
  {
    text: "CHD SURGERY",
    image: chd,
  },
  {
    text: "LUAD IMPLANTATION",
    image: luad,
  },
  // Add more card data objects here as needed
];
const cardiology = [
  {
    text: "Intervention Cardiology",
    image: intervention,
  },
  {
    text: "Cardiac Electrophysiology",
    image: electrophysiology,
  },
  {
    text: "Device implantation in Rhythm Management and Heart Failure.",
    image: rhythm,
  },
  {
    text: "Device Implementation CHD",
    image: coronary,
  },
  // Add more card data objects here as needed
];
const inpatient = [
  {
    text: "VIP Cabins",
    image: vipcabins,
  },
  {
    text: "Deluxe Cabins",
    image: deluxecabins,
  },
  {
    text: "High Care Beds",
    image: highcare,
  },
  {
    text: "Stepdown",
    image: stepdown,
  },
  {
    text: "Stroke Care Beds",
    image: strokecarebeds,
  },
  {
    text: "14- Bed Cardiac ICU",
    image: bedcardiacicu,
  },
  {
    text: "2 World Class Cardiac OT",
    image: worldclasscardiacot,
  },
  {
    text: "34- Bed CCU",
    image: bedccu,
  },
  {
    text: "2 Modern Cath Labs",
    image: moderncathlabs,
  },
  {
    text: "6- Bed Post Cath",
    image: bedpostcath,
  },
  // Add more card data objects here as needed
];
const outpatient = [
  {
    text: "Intervention Cardiology",
    image: intervention,
  },
  {
    text: "Cardiac Electrophysiology",
    image: electrophysiology,
  },
  {
    text: "Device implantation in Rhythm Management and Heart Failure.",
    image: rhythm,
  },
  {
    text: "Device Implementation CHD",
    image: coronary,
  },
  // Add more card data objects here as needed
];
function AboutLabaid() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Headline />
      <NavigationBar />
      <About
        setPlayState={setPlayState}
        isVisible={false}
        aboutdetails={
          "Labaid Cardiac Hospital, having been into operations since 13th of July, 2004, is the 1st NABH International accredited hospital in Bangladesh. A dedicated and proud team of healthcare professionals including Consultants, Medical Officers, Nurses and other support staff strive relentlessly to deliver quality healthcare service aimed at best clinical outcome with care. Our visionary and value- driven leadership promotes patients’ wellbeing ahead of everything else. Labaid Cardiac Hospital has the privilege of performing nearly 12,000 Cardiac Surgeries, more than 12,000 Coronary Angioplasties, 50,000 Coronary Angiograms, and about 5,000 other Cath Procedures with an overall success rate of 99%, which is considered very high in the industry. Equipped with the most modern OT, Cath lab, ICU, CCU, Machinery and Equipment, the dedicated team of Surgeons, Cardiologists, Anesthesiologists, Perfusionists, Nurses and Technicians have been rendering invaluable services since inception. The 24/7 Accident and Emergency Department provides immediate response for cardiac services alongside other emergency interventions."
        }
      />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />

      <Title subtitle="Major services" title="Cardiac Surgery" />
      <SmallCards items={cardiacsurgery} />
      <Title subtitle="Major services" title="Cardiology" />
      <div className="text">
        We envision to be the healthcare provider of choice for patients as well
        as professionals and perform at a superior level maintaining sound
        ethical, moral and regulatory standards.
      </div>
      <SmallCards items={cardiology} />
      <Title title="Inpatient Facilites" />
      <SmallCards items={inpatient} />
      <Title title="Outpatient Facilites" />
      <SmallCards items={outpatient} />
      <Footer />
    </div>
  );
}

export default AboutLabaid;
