import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import ReadDetails from "../components/ReadDetails/ReadDetails";
import Footer from "../components/Footer/Footer";

const DetailsPage = () => {
  // Access URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const image = urlParams.get("image");
  const text = urlParams.get("text");
  const details = urlParams.get("details");
  return (
    <div>
      <Headline />
      <NavigationBar />
      <ReadDetails image={image} title={text} detail={details} />
      <Footer />
    </div>
  );
};

export default DetailsPage;
