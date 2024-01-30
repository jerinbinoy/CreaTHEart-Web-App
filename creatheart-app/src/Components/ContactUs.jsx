import React from 'react'
import './ContactUs.css';
import {Row} from 'react-bootstrap';
import Selfie from '../Assets/selfie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactUs() {
  
  return (
    <div className='contactUsSection'>
        <Row className=' collectionOfImages m-0 p-0'>
                
        </Row>
        <Row>
            <h2 className='text-center contactUsTitle mt-3'>Contact Us</h2>
        </Row>
        <Row className='mt-5 '>
          <ul className='d-flex socialMediaLinks justify-content-center align-items-center' id='socialMediaLinks'>
            <a className='pe-5'  href='mailto:creatheartofficial@gmail.com'><FontAwesomeIcon icon={faEnvelope} color='white' size='2x' className='socialMediaLink' /></a>
            <a className='pe-5' href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F918758527897&e=AT37c40OJuw9x4le06UcQP05IeIQtUKOcDEq4Gnkc-K3mn-E2Ef0Zg7GkKidbT2eX8t0G9VaW8F1ghH-fbyvKjFD-l59o1WFF8vJa9lmDimmQ4pu8hIs98A'><FontAwesomeIcon icon={faWhatsapp} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='https://www.instagram.com/creatheart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FontAwesomeIcon icon={faInstagram} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='https://m.facebook.com/creatheartofficial'><FontAwesomeIcon icon={faFacebook} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='tel:+918758527897'><FontAwesomeIcon icon={faPhone} color='white' size='2x' className='socialMediaLink'  /></a>
          </ul>
        </Row>
        <Row className='d-flex justify-content-center'  >
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