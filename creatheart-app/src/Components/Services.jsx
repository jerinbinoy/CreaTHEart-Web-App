import React from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import ResumeImg from '../Assets/Resume vector image.png'

function Services() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("arrowIcon").style.opacity = "0";
    document.getElementById("servicesText").style.opacity = "0";
    //document.getElementById("servicesText").style.float = "left ";
    
  } else {
    document.getElementById("arrowIcon").style.opacity = "1";
    document.getElementById("servicesText").style.opacity = "1";
    //document.getElementById("servicesText").style.animation = "none";
  }
}
  return (
    <div className='serviceRow'>
      <Row className='text-center pt-2 ' >
        <h2 className='servicesText ps-4' id='servicesText'>Our Services<FontAwesomeIcon icon={faArrowDown} size='1x' className='arrowIcon ms-2' id='arrowIcon'/></h2>
      </Row>
      <Row className='d-flex align-items-center mt-1 pt-5  pb-5 mb-5 '>
        <Col className='justify-content-end d-flex p-0'>
        <img src={ResumeImg} alt="Resume vector image" className='resumeImg ' />
        </Col>
        <Col className='p-0' >
        <h1 className='resumeText'>Resume and<br/> CV Making</h1>
        </Col>
      </Row>
    </div>
  )
}

export default Services