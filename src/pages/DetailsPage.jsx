import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";

import test from "../assets/MyImage/service2.png";
import ReadDetails from "../components/ReadDetails/ReadDetails";
import Footer from "../components/Footer/Footer";

const DetailsPage = () => {
  return (
    <div>
      <Headline />
      <NavigationBar />
      <ReadDetails image={test} title="Test" detail="test 1 2 3 4 5" />
      <Footer />
    </div>
  );
};

export default DetailsPage;
