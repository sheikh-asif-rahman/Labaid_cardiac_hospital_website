import React from 'react'
import './ReadDetails.css';

const ReadDetails = ({image,title,detail}) => {
  return (
    <div className="readingdetail">
      <div className="detailimage">
        <img className="imagedetail" src={image} alt="Detail Image" />
      </div>
      <div className="otherdetails">
        <p className="detailtitle">{title}</p>
        <p className="detailall">{detail}</p>
      </div>
    </div>
  )
}

export default ReadDetails