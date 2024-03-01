import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navigation = (props) => {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container-fluid">
    <a className="navbar-brand" href="/">
     <img src={props.logo} alt="Logo" height="50" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
     <ul className="navbar-nav">
      <li className="nav-item">
       <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
       <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Events
       </a>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/events">Upcoming Events</a></li>
        <li><a className="dropdown-item" href="/past-events">Past Events</a></li>
       </ul>
      </li>
      <li className="nav-item">
       <span className="nav-link">
        <Button href='/register'>Register</Button>
       </span>
      </li>
     </ul>
    </div>
   </div>
  </nav>
 )
}

export default Navigation