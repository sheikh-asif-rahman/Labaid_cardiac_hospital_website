// import React from "react";
// import './DoctorsTemplete.css'

// const DoctorsTemplete = () => {
//   return (
//     <div className="doctor-card">
//       <div className="doctor-information">
//         <img src={doctor1} alt="" />
//         <div>
//           <h3>row 1</h3>
//           <hr />
//           <p>row 2</p>
//           <hr />
//           <p>row 3</p>
//           <hr />
//           <p>row 4</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorsTemplete;

import React from "react";
import doctor1 from "../../assets/MyImage/doctor-1.jpg";

import "./DoctorsTemplete.css";

const DoctorsTemplete = () => {
  return (
    <div className="doctor-profile-card">
      <div className="profile-card">
        <div className="card-line"></div>
        <div className="image-box">
          <img src={doctor1} alt="" />
        </div>
        <div className="doctor-content">
          <div className="doctor-detail">
            <h2>Test 1</h2>
            <hr />
            <span>Test 2</span>
            <br />
            <hr />
            <span>Test 3</span>
            <br />
            <hr />

            <span>Test 4</span>
            <br />
            <hr />

            <span>Test 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsTemplete;
