import React, { useState } from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import './Home.css';
import Manwithlap from '../Assets/manwithlap.png';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Boywithlap from '../Assets/boywithlap.png';
import Gentleman from '../Assets/Gentleman.png';
import Ladywithphone from '../Assets/Ladywithphone.png';
import Girlwithphone from '../Assets/Girlwithphone.png';

function Home() {
  
  let [increment,setIncrement] = useState(0);
  const homeImages = [{Image:Manwithlap},
                      {Image:Boywithlap},
                      {Image:Gentleman},
                      {Image:Ladywithphone},
                      {Image:Girlwithphone}]

  /*setTimeout(()=>{
    setTitle(true)
  },3500);
  if(title){
    document.getElementById('homePageTitle').style.display = "block";
  };*/

setTimeout(function imgChange(){
    setIncrement(increment < 4 ? increment += 1 : increment = 0);
    setTimeout(imgChange,6000);
  },6000)




  return (
    <div>
     
      <Row className='homeRow' id='homeSection'>
        <Col className='d-flex justify-content-center align-items-md-end' xs="12" md='6' id='leftSectionHome'>
        <img src={homeImages[increment].Image} className='frontPageImage mt-4 mt-md-0' alt='homepageImage' id='frontPageImage'></img>
        </Col>
        <Col xs="12" md="6" className='d-grid ' id='rightSectionHome'>
          <Col  className='d-grid  justify-content-center align-items-end g-0' id='homepageDetails'>
          <h2 className='homePageTitle me-2 ' id='homePageTitle'>
            <span className='letterGold'>C</span>reating 
            <span className='letterGold ms-2'>D</span>esigns 
            <br></br>with Art & Heart</h2>
           
          </Col>
            
           <Col className='d-flex align-items-start justify-content-center'>
              <Button variant='warning' size='lg' href='#servicesSection'>
                  Get Started
                  <FontAwesomeIcon icon={faChevronRight}  className='previousArrowRight ms-3' />
              </Button>
           </Col>
       </Col>

      </Row>
    </div>
  )
}

export default Home