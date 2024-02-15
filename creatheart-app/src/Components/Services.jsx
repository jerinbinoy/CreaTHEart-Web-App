import React from 'react';
import { useState} from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ResumeImage from '../Assets/Resume vector image.png';
import ServiceModal from './Modal/ServiceModal';
import Linkedin from '../Assets/Add User-rafiki.svg';
import Animation from '../Assets/animation.svg';
import Portfolio from '../Assets/portfolio.svg';
import Poster from '../Assets/poster-designing.svg';
import Logo from '../Assets/logo-making.svg';
import Advertisement from '../Assets/advertisement-making.svg';
import VideoEditing from '../Assets/video-editing.svg';
import DigitalMarketing from '../Assets/digital marketing.svg';
import WebDesigning from '../Assets/web-designing.svg';






function Services({count,setCount}) {

  let servicesCollection = [{
    "Text": "Resume/CV Writing",
    "Image": ResumeImage,
    "Details": "Welcome to Creatheart, where we understand the power of a compelling resume or curriculum vitae (CV) in unlocking new career opportunities. Whether you're a seasoned professional looking to take the next step in your career or a recent graduate embarking on a new journey, our expert team is here to craft a standout document that showcases your skills, experiences, and aspirations."
},{
  "Image": Animation,
  "Text": "Animation",
  "Details": "Welcome to Creatheart, where creativity meets innovation in the world of animation. Our Animation Services are crafted to breathe life into your ideas, captivate your audience, and deliver a visual experience that goes beyond expectations."
},{
  "Details": "At Creatheart, we believe in the power of a well-crafted portfolio to tell your story, highlight your achievements, and make a lasting impression. Our Portfolio Making Services are designed to elevate your personal or professional brand through visually stunning and strategically structured portfolios.",
  "Text": "Portfolio Making",
  "Image": Portfolio
},{
  "Image": Linkedin,
  "Text": "LinkedIn profile<br/> Creation",
  "Details": "Unlock the full potential of your professional identity with our LinkedIn Profile Creation Services at Creatheart. Your LinkedIn profile is your digital introduction to the professional world, and we're here to ensure it reflects your skills, achievements, and aspirations effectively."
},{
  "Text": "Poster Designing",
  "Image": Poster ,
  "Details": "Transform your ideas into visually stunning masterpieces with our Poster Making Services at Creatheart. Whether you're promoting an event, marketing a product, or communicating a message, our talented design team is here to bring your vision to life."
},{
  "Details": "Your brand's identity begins with a memorable and impactful logo. At Creatheart, we specialize in Logo Making Services that go beyond aesthetics, creating a visual representation that communicates the essence of your brand.",
  "Image": Logo,
  "Text": "Logo Making"
},{
  "Details": "Elevate your brand and engage your audience with impactful advertisements crafted by the creative experts at Creatheart. Our Advertisement Making Services are designed to turn your ideas into visually stunning campaigns that leave a lasting impression.",
  "Text": "Advertisement Making",
  "Image": Advertisement
},{
  "Text": "Video Editing",
  "Image": VideoEditing,
  "Details": "At Creatheart, we understand the transformative power of video editing. Our Video Editing Services are designed to elevate your raw footage, turning it into engaging, polished content that captivates your audience and communicates your message effectively."
},{
  "Text": "Digital Marketing",
  "Details": "Welcome to Creatheart, your strategic partner in navigating the dynamic landscape of digital marketing. Our Digital Marketing Services are designed to elevate your online presence, engage your target audience, and drive measurable results for your business.",
  "Image": DigitalMarketing
},{
  "Text": "Web Designing",
  "Details": "Welcome to Creatheart, where innovation meets design to shape exceptional digital experiences. Our Web Designing Services are tailored to create visually stunning, user-friendly, and strategically optimized websites that leave a lasting impression.",
  "Image": WebDesigning
}];
  // let [count,setCount] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50 ;


  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
    if(isLeftSwipe){
       handleClick("rightArrow")
    }else if (isRightSwipe){
      handleClick("lefttArrow")
    }
  }
  
  

  function handleClick(arrow){
        
        const leftArrow = document.getElementById("previousArrowLeft");
        const serviceImage = document.getElementById("serviceImg");
        const serviceTitle = document.getElementById("serviceTitle");
        const serviceDetails = document.getElementById("serviceDetails");
        

        if(arrow === 'rightArrow'){
          count <= 8 ? setCount( count += 1) : setCount(0);
          let serviceCollection = servicesCollection[count]
          leftArrow.style.display = 'block';
          serviceImage.src = serviceCollection.Image;
          serviceTitle.innerHTML = serviceCollection.Text;
          serviceDetails.innerHTML = serviceCollection.Details;
          console.log(count);
         
        }
        else{
          count > 0 ? setCount(count -= 1) : setCount(count += 0)
          let updatedService = servicesCollection[count];
          serviceImage.src = updatedService.Image;
          serviceTitle.innerHTML = updatedService.Text;
          serviceDetails.innerHTML = updatedService.Details;
        }
  }
  
  return (
    <div className='serviceRow' id='servicesSection'>
      <Row className=' pt-2' >
        <h2 className='servicesText  ps-4 text-white' id='servicesTitle'>Our Services<FontAwesomeIcon icon={faArrowDown} size='1x' className='arrowIcon ms-2' id='arrowIcon'/></h2>
      </Row>

      <Row className='d-flex align-items-center servicesRow' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <Col xs="1" className='text-end ps-3 pe-0' >
          <FontAwesomeIcon icon={faChevronLeft} size='3x' className='previousArrowLeft' id='previousArrowLeft' onClick={()=>handleClick('leftArrow')}/>
          </Col>
        <Col xs="10" className=' p-0 d-md-flex justify-content-md-end align-items-center h-100' id='serviceDisplay'>
           <Col xs="12" md="6" className='text-center'>
            <img src={ResumeImage} alt="resume" className='serviceImg h-100 text-center' id='serviceImg'  />
          </Col>
        
          <Col xs="12" md="6" className='text-center'>
            <h1 className='serviceTitle h-50 text-center'id='serviceTitle' >Resume/CV Writing</h1>
            <p id="serviceDetails">Welcome to Creatheart, where we understand the power of a compelling resume or curriculum vitae (CV) in unlocking new career opportunities. Whether you're a seasoned professional looking to take the next step in your career or a recent graduate embarking on a new journey, our expert team is here to craft a standout document that showcases your skills, experiences, and aspirations.</p>
          {count === 0 ? <ServiceModal /> : null}
          </Col>
           
        </Col>
          
          <Col xs="1" className='text-center ps-0 pe-0 pe-md-0 ps-lg-5'>
             <FontAwesomeIcon icon={faChevronRight} size='3x' className='nextArrowRight' id='nextArrowRight' onClick={()=>handleClick('rightArrow')}/>
          </Col>
        
        
      </Row>
    </div>
  )
}

export default Services