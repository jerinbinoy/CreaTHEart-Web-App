import React, { useState } from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import './Home.css';
import Manwithlap from '../Assets/manwithlap.png';

function Home() {
  const [title,setTitle] = useState(false);

  setTimeout(()=>{
    setTitle(true)
  },3500);
  if(title){
    document.getElementById('homePageTitle').style.display = "block";
  };

 

  return (
    <div>
     
      <Row className='homeRow'>
        <Col className='d-flex justify-content-center align-items-md-end' xs="12" md='6'>
        <img src={Manwithlap} className='frontPageImage mt-4 mt-md-0' alt='homepageImage'></img>
        </Col>
        <Col xs="12" md="6" className='d-grid  justify-content-center align-items-center'>
          <h2 className='homePageTitle me-2  ' id='homePageTitle'>
            <span className='letterGold'>C</span>reating 
            <span className='letterGold ms-2'>D</span>esigns 
            <br></br>with Art & Heart</h2>
            
           

          
           
        </Col>
      </Row>
    
    </div>
  )
}

export default Home