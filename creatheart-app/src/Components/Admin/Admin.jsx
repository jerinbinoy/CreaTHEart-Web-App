import React, { useState, useEffect } from 'react';
import './Admin.css';
import {Row,Col} from 'react-bootstrap';
import logo from '../../Assets/Logo.png';
import logotext from '../../Assets/Logo text.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {FirebaseApp} from '../../Firebase/config';
import { collection,getDocs} from "firebase/firestore";



function Admin() {

    const [messages, setMessages] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function handleclick(){
          const querySnapshot = await getDocs(collection(FirebaseApp,"Comments"));
            setMessages(querySnapshot);
          const querySnapshotReviews = await getDocs(collection(FirebaseApp,"Reviews"));
            setReviews(querySnapshotReviews);
            
        }
        handleclick();  
      }, []);
      
     const finalData = [];
    
     messages.forEach((doc,id) => {
            let individualData = doc.data();
            finalData.push(
                <Toast>
                <Toast.Header closeButton={false}>
                <strong className="me-auto">{individualData.Name}</strong>
                <small className="text-muted">{individualData.Date}</small>
                </Toast.Header>
                <strong className='ms-2 mt-3'>{individualData.Email}</strong>
                <Toast.Body>{individualData.Comment}</Toast.Body>
                </Toast>
                );  
    })

     const finalReviewsData = [];
    
     reviews.forEach((doc) => {
            let individualReviewsData = doc.data();
            finalReviewsData.push(
                <Toast>
                <Toast.Header closeButton={false}>
                <strong className="me-auto">{individualReviewsData.Name}</strong>
                <small className="text-muted">{individualReviewsData.Date}</small>
                </Toast.Header>
                <strong className='ms-2 mt-3'>{individualReviewsData.Heading}</strong>
                <Toast.Body>{individualReviewsData.Comment}</Toast.Body>
                </Toast>
                );  
    })

  return (
    <div>
        <Row className='adminPanel '>
            <Col className='mt-3 mb-3'>
                    <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top ms-5 "
                            /><img
                            alt=""
                            src={logotext}
                            width="110"
                            height="15"
                            className="d-inline-block align-top m-2 me-5"
                    />
            </Col>
            <Col>
             <h3 className='text-white mt-3 mb-3 me-3 text-end dashboardTitle'>Admin Dashboard</h3>
            </Col>
        </Row>
        
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row className=''>
                <Col sm={3} className='leftRow p-3'>
                <ListGroup>
                    <ListGroup.Item action href="#link1"  variant="dark" className='mb-2'>
                    Messages
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2"  variant="dark" className='mb-2'>
                    Reviews
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3"  variant="dark" className='mb-2'>
                    Analytics
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4"  variant="dark" >
                    Users Engaged
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={9}>
                <Tab.Content className='tabContent'>
                    <Tab.Pane eventKey="#link1" className='p-3 '>
                        <Row>
                         <h3 className='messagesTitle text-dark'>Messages</h3>
                        </Row>
                        <hr></hr>
                        <Row className=''>
                                <ToastContainer className="position-static toastContainer">
                                    {finalData}
                                </ToastContainer>
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2" className='p-3'>
                    <Row>
                         <h3 className='reviewsTitle text-dark'>Reviews</h3>
                        </Row>
                        <hr></hr>
                        <Row className=''>
                                <ToastContainer className="position-static toastContainer">
                                    {finalReviewsData}
                                </ToastContainer>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
  



    </div>
  )
}

export default Admin