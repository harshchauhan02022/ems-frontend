import React, { useState } from 'react';

const Carousel = () => {
 const events = [
  { title: 'Event 1', image: 'logo.jpg', time: '2024-02-20T14:23:15Z', details: 'Details for Event 1' },
  { title: 'Event 2', image: 'logo1.jpg', time: '2024-02-21T14:23:15Z', details: 'Details for Event 2' },
  { title: 'Event 3', image: 'logo2.jpg', time: '2024-02-22T14:23:15Z', details: 'Details for Event 3' },
  { title: 'Event 4', image: 'logo3.jpg', time: '2024-02-23T14:23:15Z', details: 'Details for Event 4' },
  { title: 'Event 5', image: 'logo4.jpg', time: '2024-02-24T14:23:15Z', details: 'Details for Event 5' }
 ];

 const [selectedEvent, setSelectedEvent] = useState(null);

 const handleMoreDetailsClick = (index) => {
  setSelectedEvent(index);
 };

 const handleCloseDetailsClick = () => {
  setSelectedEvent(null);
 };

 return (
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">
    {events.map((event, index) => (
     <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
      <img src={event.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
      <div className="carousel-caption d-none d-md-block">
       <h5>{event.title}</h5>
       <p>{event.time}</p>
       <button className="btn btn-primary" onClick={() => handleMoreDetailsClick(index)}>More Details</button>
      </div>
     </div>
    ))}
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
   </button>
   {selectedEvent !== null && (
    <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
     <div className="modal-dialog">
      <div className="modal-content">
       <div className="modal-header">
        <h5 className="modal-title">{events[selectedEvent].title}</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseDetailsClick}></button>
       </div>
       <div className="modal-body">
        <p>{events[selectedEvent].details}</p>
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default Carousel;
