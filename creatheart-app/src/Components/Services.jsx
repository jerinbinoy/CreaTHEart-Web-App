import React from 'react';
import { useState,useEffect } from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ResumeImage from '../Assets/Resume vector image.png';
import { collection,getDocs} from "firebase/firestore";
import {FirebaseApp} from '../Firebase/config';
import ServiceModal from './Modal/ServiceModal';


function Services({count,setCount}) {

  let servicesCollection = [];
  // let [count,setCount] = useState(0);
  const [services, setServices] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50 ;

  useEffect(() => {
    async function handleclick(){
      const querySnapshot = await getDocs(collection(FirebaseApp,"ServicesList"));
        setServices(querySnapshot);
    }
    handleclick();
        
  }, []);

   services.forEach((service)=>{
    let serviceData = service.data();
    servicesCollection.push(serviceData);
  });



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