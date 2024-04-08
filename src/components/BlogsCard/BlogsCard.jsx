// BlogsCard.js
import React from "react";
import "./BlogsCard.css";
import Card from "react-bootstrap/Card";

const BlogsCard = ({ cardData }) => {
  return (
    <div className="blogcards">
      {cardData.map((card, index) => (
        <Card key={index} className="blogcard">
          <Card.Img className="blogcardimage" variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <div className="blogcardsubtitle">
            <Card.Subtitle className="blogsubtitle">{card.subtitle}</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BlogsCard;
