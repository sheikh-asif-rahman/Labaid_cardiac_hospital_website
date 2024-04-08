import React, { useState, useRef } from "react";
import defaultImageUrl from "../../assets/MyImage/image_upload.png";
import "./ImageUploader.css"; // Import your CSS file
import white_arrow from "../../assets/white-arrow.png";
const ImageUploader = () => {
  const [image, setImage] = useState(defaultImageUrl);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="blogupload">
      <div className="blogimageuploader">
        <p className="uploadimage">Select Image</p>
        <img
          className="previewblogimage"
          src={image}
          alt="Preview"
          onClick={handleClick}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
      <div className="titleandwriting">
        <form>
          <input
            className="blogtitleinput"
            type="text"
            placeholder="Type Your Blog Title Here..."
            required
          />
          <textarea
            className="Blogwritingsinput"
            placeholder="Your Writings Here..."
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit Your Writing
            <img src={white_arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUploader;
