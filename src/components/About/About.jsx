import React from "react";
import "./About.css";
import white_arrow from "../../assets/white-arrow.png";
import about_img from "../../assets/MyImage/about_us.jpg";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  const handleClick = () => {
    // Replace '/another-page' with the URL of the page you want to navigate to
    window.location.href = "/aboutlabaid";
  };
  return (
    <div id="about_us" className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>LABAID Cardiac Hospital</h2>
        <p>
          Labaid Cardiac Hospital, having been into operations since 13th of
          July, 2004, is the 1st NABH International accredited hospital in
          Bangladesh. A dedicated and proud team of healthcare professionals
          including Consultants, Medical Officers, Nurses and other support
          staff strive relentlessly to deliver quality healthcare service aimed
          at best clinical outcome with care. Our visionary and value- driven
          leadership promotes patients’ wellbeing ahead of everything else.
          Labaid Cardiac Hospital has the privilege of performing nearly 12,000
          Cardiac Surgeries, more than 12,000 Coronary Angioplasties, 50,000
          Coronary Angiograms, and about 5,000 other Cath Procedures with an
          overall success rate of 99%, which is considered very high in the
          industry.
        </p>
        <button type="submit" className="btn dark-btn" onClick={handleClick}>
          See more
          <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default About;
