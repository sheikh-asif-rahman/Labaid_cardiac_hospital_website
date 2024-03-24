import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import ImportantCard from "../components/ImportantCard/ImportantCard";

import cabg from "../assets/MyImage/cabg.jpg";
import chd from "../assets/MyImage/chd.jpg";

const cards = [
  {
    title: "CABG",
    description: "Testing this",
    image: cabg,
  },
  {
    title: "CHD SURGERY",
    description: "Testing this",
    image: chd,
  },
  {
    title: "CABG",
    description: "Testing this",
    image: cabg,
  },
  // Add more card data objects here as needed
];

function AboutLabaid() {
  return (
    <div>
      <Headline />
      <NavigationBar />
      <ImportantCard cardData={cards} />
    </div>
  );
}

export default AboutLabaid;
