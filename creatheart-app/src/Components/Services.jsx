import React from 'react';
import { useState } from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faCircleChevronRight,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ResumeImg from '../Assets/Resume vector image.png'



function Services() {
  
  const [arrowLeft,setArrowLeft] = useState(false);
  const [service,setService] = useState(false);

  const rightArrow = document.getElementById("nextArrowRight");
  const leftArrow = document.getElementById("previousArrowLeft");

  function handleClick(arrow){
        setService(true);
        setArrowLeft(true);

        if(arrow === 'rightArrow'){
          leftArrow.style.display = 'block';
        }
  }
  //document.getElementById("previousArrowLeft").style.display = 

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
        <h2 className='servicesText justify-content-center ps-4' id='servicesText'>Our Services<FontAwesomeIcon icon={faArrowDown} size='1x' className='arrowIcon ms-2' id='arrowIcon'/></h2>
      </Row>

      <Row className='d-flex align-items-center mt-1 pt-5  pb-5 mb-5 '>
        <Col className='justify-content-end d-flex p-0 align-items-center'>
          <Col xs="3" className='text-start ps-5' >
          <FontAwesomeIcon icon={faCircleChevronLeft} size='4x' className='previousArrowLeft' id='previousArrowLeft'/>
          </Col>
          <Col xs="9" className='d-flex justify-content-end'>
            <img src={ResumeImg} alt="Resume vector image" className='resumeImg ' />
          </Col>
        </Col>
        <Col className='p-0 d-flex align-items-center' >
          <Col xs="6">
            <h1 className='resumeText'>Resume and<br/> CV Making</h1>
          </Col>
          <Col xs="6" className='text-end pe-5'>
             <FontAwesomeIcon icon={faCircleChevronRight} size='4x' className='nextArrowRight' id='nextArrowRight' onClick={()=>handleClick('rightArrow')}/>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Services