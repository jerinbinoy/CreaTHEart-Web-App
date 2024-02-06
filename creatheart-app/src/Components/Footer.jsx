import React from 'react';
import './Footer.css';
import {Row} from 'react-bootstrap';


function Footer() {
  return (
    <div>
       <Row className='d-flex justify-content-center pt-3 footer'>
    
        <ul className='d-flex justify-content-center items text-white'>
            <a className='ms-3 links' href="#homeSection">Home</a>
            <a className='ms-3 links' href="#servicesSection">Services</a>
            <a className='ms-3 links' href="#aboutSection">About</a>
            <a className='ms-3 links' href="#contactSection">Contact Us</a>
        </ul><hr />
        <h6 className='text-center allRights'>@2024|Creatheart.com|All Rights Reserved</h6>
       </Row>
    </div>
  )
}

export default Footer