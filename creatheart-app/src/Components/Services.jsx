import React from 'react';
import { useState,useEffect } from 'react';
import './Services.css';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Portfolio from '../Assets/portfolio.svg';
import { collection,getDocs} from "firebase/firestore";
import {FirebaseApp} from '../Firebase/config';


function Services() {

  let servicesCollection = [];
  let [count,setCount] = useState(0);
  const [services, setServices] = useState([]);

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

   
  
  
  

  function handleClick(arrow){
        
        const leftArrow = document.getElementById("previousArrowLeft");
        const serviceImage = document.getElementById("serviceImg");
        const serviceTitle = document.getElementById("serviceTitle");
        const serviceDetails = document.getElementById("serviceDetails");
        

        if(arrow === 'rightArrow'){
          count < 9 ? setCount( count += 1) : setCount(0);
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
  
  window.onscroll = function() {scrollFunction()};
  

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("arrowIcon").style.opacity = "0";
    document.getElementById("servicesText").style.marginLeft = "0%";
    
  } else {
    document.getElementById("arrowIcon").style.opacity = "1";
    document.getElementById("servicesText").style.marginLeft = "42%";
   
  } 
}

  return (
    <div className='serviceRow'>
      <Row className=' pt-2' >
        <h2 className='servicesText  ps-4 text-white' id='servicesText'>Our Services<FontAwesomeIcon icon={faArrowDown} size='1x' className='arrowIcon ms-2' id='arrowIcon'/></h2>
      </Row>

      <Row className='d-flex align-items-center servicesRow'>
          <Col xs="1" className='text-end ps-3 pe-0' >
          <FontAwesomeIcon icon={faChevronLeft} size='3x' className='previousArrowLeft' id='previousArrowLeft' onClick={()=>handleClick('leftArrow')}/>
          </Col>
        <Col xs="10" className=' p-0 d-md-flex justify-content-md-end align-items-center h-100'>
           <Col xs="12" md="6" className='text-center'>
            <img src={Portfolio} alt="image" className='serviceImg h-100 text-center' id='serviceImg'  />
          </Col>
        
          <Col xs="12" md="6" className='text-center '>
            <h1 className='serviceTitle h-50 text-center'id='serviceTitle' >Portfolio Making</h1>
            <p id="serviceDetails">At Creatheart, we believe in the power of a well-crafted portfolio to tell your story, highlight your achievements, and make a lasting impression. Our Portfolio Making Services are designed to elevate your personal or professional brand through visually stunning and strategically structured portfolios.</p>
          </Col>
        </Col>
          
          <Col xs="1" className='text-center ps-0 pe-3 pe-md-0 ps-lg-5'>
             <FontAwesomeIcon icon={faChevronRight} size='3x' className='nextArrowRight' id='nextArrowRight' onClick={()=>handleClick('rightArrow')}/>
          </Col>
        
        
      </Row>
    </div>
  )
}

export default Services