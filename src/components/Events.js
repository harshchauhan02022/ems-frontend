import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Events = () => {
 const [imagesToShow, setImagesToShow] = useState(6);

 const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg"
 ];

 const handleClick = () => {
  setImagesToShow(imagesToShow + 6);
 };

 return (
  <div className="container">
   <div className="row mb-4">
    {images.slice(0, imagesToShow).map((image, index) => (
     <div className="col-md-4 mb-4" key={index}>
      <img src={image} alt={`Image ${index + 1}`} className="img-fluid" style={{ height: '200px', width: '100%' }} />
     </div>
    ))}
   </div>
   {imagesToShow < images.length && <center><Button variant="primary" onClick={handleClick}>More</Button></center>}
  </div>
 );
};

export default Events;
