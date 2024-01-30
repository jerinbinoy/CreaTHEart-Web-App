import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './About.css';
import Cherukkanwithphone from '../Assets/cherkkanwithphone.png';


function About() {
  

  return (
    <div className='aboutRowTitle'>
        <Row >
            <Col className=' d-flex justify-content-center mt-3 p-0'>
              <h2 className='aboutTitle'>
                About Us 
              </h2>
              
            </Col>
        </Row>
        <Row className='aboutContent d-flex align-items-center justify-content-center'>
          
          <Col className='aboutText p-4 shadow-sm d-grid mb-5 ms-2 mt-5' xs="11" md="6">
            <h3 className='text-center'>Welcome to CreaTheart - Where every design tells a Story!</h3><br />
                <Row>
                      <Col xs='12' md="4" className=' position-relative p-2'>
                          <p>At CreaTheart, we are not just designers; we are storytellers, problem solvers, and creators of visual experiences. With a passion for turning ideas into visually compelling narratives, we embark on a journey to bring your brand to life through the power of design.</p>
                      </Col>
                      <Col xs='12' md="4" className=' position-relative p-2'>
                          <p>Our mission is simple — to deliver stunning and effective design solutions that captivate, communicate, and inspire. We believe in the transformative power of design and its ability to elevate brands, engage audiences, and leave a lasting impression.</p>
                      </Col>
                      <Col xs='12' md="4" className='position-relative p-2'>
                          <p>CreaTheart is a team of dedicated and talented graphic designers committed to pushing the boundaries of creativity. With a diverse set of skills and a shared love for design, we collaborate seamlessly to deliver unique and impactful visual solutions.</p>
                      </Col>
                </Row>
          </Col>
          <Col xs='12' md="5" className='p-0  ms-5'>
            <img src={Cherukkanwithphone} className='cherkkanImage'></img>
          </Col>
        </Row>
    </div>
  )
}

export default About