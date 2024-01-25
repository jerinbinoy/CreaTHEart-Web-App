import React from 'react';
import './Footer.css';
import {Row} from 'react-bootstrap';


function Footer() {
  return (
    <div>
       <Row bg="white" className='d-flex justify-content-center mt-3'>
    
        <ul className='d-flex justify-content-center items'>
            <li className='ms-3'>Home</li>
            <li className='ms-3'>Services</li>
            <li className='ms-3'>About</li>
            <li className='ms-3'>Contact Us</li>
        </ul><hr />
        <h6 className='text-center'>@2024|Creatheart.com|All Rights Reserved</h6>
       </Row>
    </div>
  )
}

export default Footer