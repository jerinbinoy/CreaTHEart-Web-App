import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

function About() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("arrowIcon").style.display = "none";
    
  } else {
    document.getElementById("arrowIcon").style.display = "block";
    
  }
}

  return (
    <div >
        <Row className='aboutRow'>
            <Col className=' d-flex justify-content-center mt-3'>
              <h2 className='aboutTitle'>
                About Us 
              </h2>
              <FontAwesomeIcon icon={faArrowDown} size='2x' className='arrowIcon ms-3' id='arrowIcon'/>
            </Col>
        </Row>
    </div>
  )
}

export default About