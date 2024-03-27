import React from "react";
import "./Footer.css";

import fb from "../../assets/MyImage/facebook.png";
import twitter from "../../assets/MyImage/twitter.png";
import youtube from "../../assets/MyImage/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          {/* 1st */}
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Employer</p>
            </a>

            <a href="">
              <p>Health Plan</p>
            </a>
            <a href="">
              <p>Individual</p>
            </a>
          </div>
          {/* 2nd */}
          <div className="sb__footer-links_div">
            <h4>For Resources</h4>
            <a href="">
              <p>Resource center</p>
            </a>

            <a href="">
              <p>Testimonials</p>
            </a>
            <a href="">
              <p>STV</p>
            </a>
          </div>
          {/* 3rd */}
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="">
              <p>Swing Tech</p>
            </a>
          </div>
          {/* 4th */}
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="">
              <p>About</p>
            </a>

            <a href="">
              <p>Press</p>
            </a>
            <a href="">
              <p>Carrer</p>
            </a>
            <a href="">
              <p>Contact</p>
            </a>
          </div>
          {/* 5th */}
          <div className="sb__footer-links_div">
            <h4>Coming Soon On</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={youtube} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Cookie Declarations</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
