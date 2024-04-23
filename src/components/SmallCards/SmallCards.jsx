import React from "react";

import "./SmallCards.css";

const SmallCards = ({ items }) => {
  const handleClick = (item) => {
    const url = `/detailspage?image=${encodeURIComponent(item.image)}&text=${encodeURIComponent(item.text)}&details=${encodeURIComponent(item.details)}`;
    window.location.href = url;
  };
  
  return (
    <div className="smallcards">
      {items.map((item, index) => (
        <div className="smallcard" key={index} onClick={() => handleClick(item)}>
          <div className="cardinfo">
            <img src={item.image} alt="" />
            <h5>{item.text}</h5>
            <div className="smallcardsdetail">
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCards;
