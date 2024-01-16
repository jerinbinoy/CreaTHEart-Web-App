import React from 'react';
import { useState } from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faCircleChevronRight,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ResumeImg from '../Assets/Resume vector image.png'
import linkedIN from '../Assets/Add User-rafiki.svg';
import PosterDesign from '../Assets/poster-designing.svg';
import WebDesigning from '../Assets/web-designing.svg';
import Advertisement from '../Assets/advertisement-making.svg';
import Portfolio from '../Assets/portfolio.svg';
import Animation from '../Assets/animation.svg';
import VideoEditing from '../Assets/video-editing.svg';
import PhotoEditing from '../Assets/Photo Editing.svg';
import LogoMaking from '../Assets/logo-making.svg';
import DigitalMarketing from '../Assets/digital marketing.svg'
import { text } from '@fortawesome/fontawesome-svg-core';


function Services() {

  const servicesCollection = [{img:ResumeImg,
    text:"Resume and<br/> CV Making",
    details:"Welcome to Creatheart, where we understand the power of a compelling resume or curriculum vitae (CV) in unlocking new career opportunities. Whether you're a seasoned professional looking to take the next step in your career or a recent graduate embarking on a new journey, our expert team is here to craft a standout document that showcases your skills, experiences, and aspirations."
  },
   {
     img:linkedIN,
     text:"LinkedIn profile<br/> Creation",
     details:"Unlock the full potential of your professional identity with our LinkedIn Profile Creation Services at Creatheart. Your LinkedIn profile is your digital introduction to the professional world, and we're here to ensure it reflects your skills, achievements, and aspirations effectively."
   },
   {
     img:PosterDesign,
     text:"Poster Designing",
     details:"Transform your ideas into visually stunning masterpieces with our Poster Making Services at Creatheart. Whether you're promoting an event, marketing a product, or communicating a message, our talented design team is here to bring your vision to life."
   },
   {
    img:WebDesigning,
    text: "Web Designing",
    details:"Welcome to Creatheart, where innovation meets design to shape exceptional digital experiences. Our Web Designing Services are tailored to create visually stunning, user-friendly, and strategically optimized websites that leave a lasting impression."
   },
   {
    img:Advertisement,
    text:"Advertisement Making",
    details:"Elevate your brand and engage your audience with impactful advertisements crafted by the creative experts at Creatheart. Our Advertisement Making Services are designed to turn your ideas into visually stunning campaigns that leave a lasting impression."
   },
   {
    img:Portfolio,
    text:"Portfolio Making",
    details:"At Creatheart, we believe in the power of a well-crafted portfolio to tell your story, highlight your achievements, and make a lasting impression. Our Portfolio Making Services are designed to elevate your personal or professional brand through visually stunning and strategically structured portfolios."
   },
   {
    img:Animation,
    text:"Animation",
    details:"Welcome to Creatheart, where creativity meets innovation in the world of animation. Our Animation Services are crafted to breathe life into your ideas, captivate your audience, and deliver a visual experience that goes beyond expectations."
   },
   {
    img:VideoEditing,
    text:"Video Editing",
    details:"At Creatheart, we understand the transformative power of video editing. Our Video Editing Services are designed to elevate your raw footage, turning it into engaging, polished content that captivates your audience and communicates your message effectively."
   },
   {
    img:PhotoEditing,
    text:"Photo Editing",
    details:"Welcome to Creatheart, where we turn ordinary photos into extraordinary visuals. Our Photo Editing Services are tailored to meet your unique needs, whether you're a professional photographer, business owner, or an individual looking to make your images stand out."
   },
   {
    img:LogoMaking,
    text:"Logo Making",
    details:"Your brand's identity begins with a memorable and impactful logo. At Creatheart, we specialize in Logo Making Services that go beyond aesthetics, creating a visual representation that communicates the essence of your brand."
   },
   {
    img:DigitalMarketing,
    text:"Digital Marketing",
    details:"Welcome to Creatheart, your strategic partner in navigating the dynamic landscape of digital marketing. Our Digital Marketing Services are designed to elevate your online presence, engage your target audience, and drive measurable results for your business."
  }
 ];
  
  const [arrowLeft,setArrowLeft] = useState(false);
  const [service,setService] = useState(false);
  let [count,setCount] = useState(0);

  const rightArrow = document.getElementById("nextArrowRight");
  


  function handleClick(arrow){
        setService(true);
        setArrowLeft(true);
        const leftArrow = document.getElementById("previousArrowLeft");
        const serviceImage = document.getElementById("serviceImg");
        const serviceTitle = document.getElementById("serviceTitle");
        const serviceDetails = document.getElementById("serviceDetails");
        

        if(arrow === 'rightArrow'){
          count < 10 ? setCount( count += 1) : setCount(0);
          let serviceCollection = servicesCollection[count]
          leftArrow.style.display = 'block';
          serviceImage.src = serviceCollection.img;
          serviceTitle.innerHTML = serviceCollection.text;
          serviceDetails.innerHTML = serviceCollection.details;
          console.log(count);
        }
        else{
          count > 0 ? setCount(count -= 1) : setCount(count += 0)
          let updatedService = servicesCollection[count];
          serviceImage.src = updatedService.img;
          serviceTitle.innerHTML = updatedService.text;
          serviceDetails.innerHTML = updatedService.details;
        }
  }
  
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

      <Row className='d-flex align-items-center servicesRow'>
          <Col xs="1" className='text-end ps-3 pe-0' >
          <FontAwesomeIcon icon={faCircleChevronLeft} size='3x' className='previousArrowLeft' id='previousArrowLeft' onClick={()=>handleClick('leftArrow')}/>
          </Col>
        <Col xs="10" className=' p-0 d-md-flex justify-content-md-end align-items-center h-100'>
           <Col xs="12" md="6" className='text-center'>
            <img src={ResumeImg} alt="Resume vector image" className='serviceImg h-100 text-center' id='serviceImg'  />
          </Col>
        
          <Col xs="12" md="6" className='text-center '>
            <h1 className='serviceTitle h-50 text-center'id='serviceTitle' >Resume and CV Making</h1>
            <p id="serviceDetails">Welcome to Creatheart, where we understand the power of a compelling resume or curriculum vitae (CV) in unlocking new career opportunities. Whether you're a seasoned professional looking to take the next step in your career or a recent graduate embarking on a new journey, our expert team is here to craft a standout document that showcases your skills, experiences, and aspirations.</p>
          </Col>
        </Col>
          
          <Col xs="1" className='text-start p-0 '>
             <FontAwesomeIcon icon={faCircleChevronRight} size='3x' className='nextArrowRight' id='nextArrowRight' onClick={()=>handleClick('rightArrow')}/>
          </Col>
        
        
      </Row>
    </div>
  )
}

export default Services