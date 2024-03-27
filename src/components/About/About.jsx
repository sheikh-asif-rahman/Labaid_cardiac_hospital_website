import React from "react";
import "./About.css";
import white_arrow from "../../assets/white-arrow.png";
import about_img from "../../assets/MyImage/about_us.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState, isVisible, aboutdetails }) => {
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
          {aboutdetails}
        </p>
        {isVisible && ( // Conditionally rendering the button based on the prop value
          <button type="submit" className="btn dark-btn" onClick={handleClick}>
            See more
            <img src={white_arrow} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
