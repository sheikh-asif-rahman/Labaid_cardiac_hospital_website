import React from "react";
import "./SmallCards.css";

const SmallCards = ({ items }) => {
  return (
    <div className="smallcards">
      {items.map((item, index) => (
        <div className="smallcard" key={index}>
          <div className="cardinfo">
            <img src={item.image} alt="" />
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCards;
