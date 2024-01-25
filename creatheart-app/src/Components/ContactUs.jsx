import React, { useState } from 'react'
import './ContactUs.css';
import {Row} from 'react-bootstrap';
import EmptyModern from '../Assets/empty-modern-creative.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactUs() {
  
  return (
    <div className='contactUsSection'>
        <Row className=' collectionOfImages m-0 p-0'>
                {/*<img src={EmptyModern} alt="" className='emptymodern ' id='emptymodern' />*/}
        </Row>
        <Row>
            <h2 className='text-center contactUsTitle mt-3'>Contact Us</h2>
        </Row>
        <Row className='mt-5 '>
          <ul className='d-flex socialMediaLinks justify-content-center align-items-center' id='socialMediaLinks'>
            <li className='pe-5' ><FontAwesomeIcon icon={faEnvelope} color='white' size='2x' className='socialMediaLink' /></li>
            <li className='pe-5'><FontAwesomeIcon icon={faWhatsapp} color='white' size='2x' className='socialMediaLink'/></li>
            <li className='pe-5'><FontAwesomeIcon icon={faInstagram} color='white' size='2x' className='socialMediaLink'/></li>
            <li className='pe-5'><FontAwesomeIcon icon={faFacebook} color='white' size='2x' className='socialMediaLink'/></li>
            <li className='pe-5'><FontAwesomeIcon icon={faPhone} color='white' size='2x' className='socialMediaLink'  /></li>
          </ul>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Row className='contactForm  m-5 '>
              <h3 className='text-center mt-2 contactFormTitle text-white'>Write to us</h3>
                <Form>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                      <Form.Label className='text-white'>Name</Form.Label>
                      <Form.Control size='sm' type="email" placeholder="Fullname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label className='text-white'>Email</Form.Label>
                      <Form.Control size='sm' type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                      <Form.Label className='text-white'>Comment</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className='text-center'>
                    <Button variant="warning" type="submit" className='mb-3 '>
                      Submit
                    </Button>
                    </div>
                </Form>
            </Row>
        </Row>
    </div>
  )
}

export default ContactUs