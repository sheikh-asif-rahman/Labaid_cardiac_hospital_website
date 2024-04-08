import React from "react";
import { Link } from "react-router-dom";

import "./SmallCards.css";

const SmallCards = ({ items }) => {
  return (
    <div className="smallcards">
      {items.map((item, index) => (
        <div className="smallcard" key={index}>
          <div className="cardinfo">
            <Link to={{ pathname: "/detailspage", state: {} } }>
              <img src={item.image} alt="" />
              <h5>{item.text}</h5>
              <div className="smallcardsdetail">
                <p>{item.details}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCards;
