import React from "react";
import "./ImportantCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImportantCard = ({ cardData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="importantcard">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
      >
        {cardData.map((card, index) => (
          <div key={index}>
            <div className="card">
              <div className="info">
                <img src={card.image} alt={card.title} />
                <div>
                  <h3>{card.title}</h3>
                  <div className="detailofthis">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImportantCard;
