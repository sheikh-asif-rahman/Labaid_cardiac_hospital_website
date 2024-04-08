import React from "react";
import "./Programs.css";
import ambulance from "../../assets/MyImage/ambulance.gif";
import report from "../../assets/MyImage/report.gif";
import hospital from "../../assets/MyImage/hospital.gif";
import appoinment from "../../assets/MyImage/appointment.gif";

// import { Card } from "react-bootstrap/";

const Programs = () => {
  return (
    <div id="program" className="programs">
      <div className="program">
        <img src={ambulance} alt="" />
        <h4>Ambulance</h4>
        <div className="caption">
          <p>Ambulance</p>
        </div>
      </div>

      <div className="program">
        <img src={report} alt="" />
        <h4>Online Report</h4>
        <div className="caption">
          <p>Report</p>
        </div>
      </div>

      <div className="program">
        <img src={hospital} alt="" />
        <h4>Emergency</h4>
        <div className="caption">
          <p>Hospital</p>
        </div>
      </div>

      <div className="program">
        <img src={appoinment} alt="" />
        <h4>Appoinment</h4>
        <div className="caption">
          <p>Online Appointment</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
