import React, { useRef, useEffect, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import doctor1 from "../../assets/MyImage/doctor-1.jpg";
import doctor2 from "../../assets/MyImage/doctor-2.jpg";
import doctor3 from "../../assets/MyImage/doctor-3.jpg";
import doctor4 from "../../assets/MyImage/doctor-4.jpg";
import doctor5 from "../../assets/MyImage/doctor-5.jpg";
import doctor6 from "../../assets/MyImage/doctor-6.jpg";
import doctor7 from "../../assets/MyImage/doctor-7.jpg";
import doctor8 from "../../assets/MyImage/doctor-8.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const testimonialsData = [
    {
      img: doctor1,
      name: "Dr. Lutfor Rahman",
      desc: "MBBS, MS (CTS) Chief Cardiac Surgeon LABAID Cardiac Hospital",
    },
    {
      img: doctor2,
      name: "Dr. Md. Lokman Hossain",
      desc: "MBBS, MS (CV & TS), FACS (USA) Cardiac Surgeon Senior Consultant, Cardiac Surgery Dept. LABAID Cardiac Hospital",
    },
    {
      img: doctor3,
      name: "Professor Dr. Abduz Zaher",
      desc: "MBBS, FCPS (Medicine), FACC (USA), FRCP Professor of Cardiology Clinical and Interventional Cardiologist Ex. Professor of Cardiology National Institute of Cardiovascular Diseases Senior Consultant, LABAID Cardiac Hospital",
    },
    {
      img: doctor4,
      name: "Dr. A P M Sohrabuzzaman",
      desc: "MD, FCPS Senior Consultant Cardiologist Director, Cardiac Cath Lab & Heart Rhythm Services Professor, School of Health Science State University of Bangladesh LABAID Cardiac Hospital",
    },
    {
      img: doctor5,
      name: "Professor Dr. Baren Chakraborty",
      desc: "MBBS (Dhaka), MCPS (Medicine), FCPS (Medicine), FACA (USA), FCCP (USA), FRCP (Ireland), FRCP (Edin), FRCP (Glasgow), FACC (USA) Senior Fellowship in Cardiology (Singapore) Senior Consultant Cardiologist Chief Medical Education and Research LABAID Cardiac Hospital",
    },
    {
      img: doctor6,
      name: "Professor. (Dr.) M M Zahurul Alam Khan",
      desc: "MBBS (DMC), FCPS (Medicine), MD (Cardiology) Cardiology, Diabetes & Medicine Specialist Ex. Professor, Dept. of Cardiology BIRDEM General Hospital & Ibrahim Medical College LABAID Limited (Diagnostics)",
    },
    {
      img: doctor7,
      name: "Professor. (Dr.) M M Zahurul Alam Khan",
      desc: "MBBS (DMC), FCPS (Medicine), MD (Cardiology) Cardiology, Diabetes & Medicine Specialist Ex. Professor, Dept. of Cardiology BIRDEM General Hospital & Ibrahim Medical College LABAID Limited (Diagnostics)",
    },
    {
      img: doctor8,
      name: "Professor. (Dr.) M M Zahurul Alam Khan",
      desc: "MBBS (DMC), FCPS (Medicine), MD (Cardiology) Cardiology, Diabetes & Medicine Specialist Ex. Professor, Dept. of Cardiology BIRDEM General Hospital & Ibrahim Medical College LABAID Limited (Diagnostics)",
    },
  ];
  const slideForward = () => {
    if (tx > -50) {
      tx -= 50;
    } else {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 50;
    } else {
      tx = -50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideForward();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider} className="slider-list">
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className="slider-item">
              <div className="card">
                <div className="info">
                  <img src={testimonial.img} alt="" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
