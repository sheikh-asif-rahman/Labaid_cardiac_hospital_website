import React from "react";
import "./Consultants.css";
import doctor from "../../assets/MyImage/doctor-1.jpg";

const Consultants = ({image_1,name_1,detail_1,image_2,name_2,detail_2}) => {
  return (
    <div id="consultants" className="consultants">
      <div className="card-left">
        <div className="card">
          <div className="info">
            <img src={image_1} alt="" />
            <div>
              <h3>{name_1}</h3>
              <p>{detail_1}</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card-right">
        <div className="card">
          <div className="info">
            <img src={image_2} alt="" />
            <div>
            <h3>{name_2}</h3>
              <p>{detail_2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consultants;