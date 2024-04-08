import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/Footer/Footer";
import ImageUploader from "../components/ImageUploader/ImageUploader";

const BlogsWriting = () => {
  return (
    <div>
      <Headline />
      <NavigationBar />
      <ImageUploader />
      <Footer />
    </div>
  );
};

export default BlogsWriting;
