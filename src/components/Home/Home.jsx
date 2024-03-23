import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Carousel, Form } from "react-bootstrap";
import labaid_01 from "../../assets/MyImage/Labaid_building.png";
import labaid_02 from "../../assets/MyImage/Labaid_building_02.jpg";
import labaid_03 from "../../assets/MyImage/Labaid_building_03.jpg";

const Home = () => {
  return (
    <div id="home" style={{ height: "100%" }}>
      <Carousel interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={labaid_01} alt="First slide" />
          <Carousel.Caption>
            <h3>
              LABAID
              <Typewriter
                words={[" CARDIAC HOSPITAL "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>1st NABH International accredited hospital in Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={labaid_02} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              LABAID
              <Typewriter
                words={[" CARDIAC HOSPITAL "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>1st NABH International accredited hospital in Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={labaid_03} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              LABAID
              <Typewriter
                words={[" CARDIAC HOSPITAL "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>1st NABH International accredited hospital in Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
