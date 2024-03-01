import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

function RegisterPage() {
 const [event, setEvent] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  // For example, you can log the values to the console
  console.log('Event:', event);
  console.log('Email:', email);
  console.log('Phone:', phone);
 };

 return (
  <Container className="d-flex justify-content-center">
   <Col md={4}>
    <h2 className="text-center">Register for Event</h2>
    <Form onSubmit={handleSubmit}>
     <Form.Group controlId="event">
      <Form.Label>Event Name:</Form.Label>
      <Form.Control
       type="text"
       placeholder="Enter event name"
       value={event}
       onChange={(e) => setEvent(e.target.value)}
       required
      />
     </Form.Group>

     <Form.Group controlId="email">
      <Form.Label>Email:</Form.Label>
      <Form.Control
       type="email"
       placeholder="Enter email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
      />
     </Form.Group>

     <Form.Group controlId="phone">
      <Form.Label>Phone:</Form.Label>
      <Form.Control
       type="tel"
       placeholder="Enter phone"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       required
      />
     </Form.Group>

     <Button variant="primary" type="submit">
      Register
     </Button>
    </Form>
   </Col>
  </Container>
 );
}

export default RegisterPage;
