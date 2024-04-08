import React from "react";
import "./Headline.css";
import fb from "../../assets/MyImage/facebook.png";
import twitter from "../../assets/MyImage/twitter.png";
import youtube from "../../assets/MyImage/youtube.png";
import phone from "../../assets/MyImage/phone.png";
import mail from "../../assets/MyImage/mail.png";

const Headline = () => {
  return (
    <div className="headline">
      <div className="appoinment">
        <marquee direction="left">
          Connect with us on our hotline number
        </marquee>
      </div>
      <div className="mail">
        <img src={mail} alt="" />
        info@labaidgroup.com
      </div>
      <div className="hotline">
        <img src={phone} alt="" />
        10606
      </div>
      <div className="social">
        <img src={fb} alt="" onClick={{}} />
        <img src={twitter} alt="" onClick={{}} />
        <img src={youtube} alt="" onClick={{}} />
      </div>
    </div>
  );
};

export default Headline;
