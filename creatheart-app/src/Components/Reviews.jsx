import React, { useEffect, useState } from 'react'
import {Row,Card,Button,Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Review.css';
import {FirebaseApp} from '../Firebase/config';
import { collection,getDocs} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import AddreviewAlert from './Alerts/AddreviewAlert';



function Reviews() {
  const [modalShow, setModalShow] = React.useState(false);
  const [reviewsData,setreviewsData] = useState([]);
  const [fullName, setFullName] = useState('');
  const [heading, setHeading] = useState('');
  const [comment, setComment] = useState('');
  const [show, setShowing] = useState(false);
  

  useEffect(() => {
    async function handleclick(){
      const querySnapshot = await getDocs(collection(FirebaseApp,"Reviews"));
        setreviewsData(querySnapshot);
    }
    handleclick();  
  }, []);
  
 const finalData = [];

 reviewsData.forEach((doc) => {
        let individualData = doc.data();
        finalData.push(
          <Card bg='light' text='black' style={{ width: '18rem' }} className="mb-2 ms-5">
          <Card.Header className="text-muted">{individualData.Name}</Card.Header>
          <Card.Body>
            <Card.Title>{individualData.Heading}</Card.Title>
            <Card.Text>
              {individualData.Comment}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
            );  
})  
  async function setData(){
    await setDoc(doc(FirebaseApp, "Reviews",fullName), {
      Name: fullName,
      Heading: heading,
      Comment: comment
    });
    setModalShow(false);
    setShowing(true);
  }
  return (
    <div>
      <Row className='bg-dark'>
            <Row>
                <h2 className='text-center text-white m-3'>Reviews</h2>
            </Row>
            
        <Row className='reviewsRow p-0 mb-3' id='reviewsRow'>
       
        { finalData}
        </Row>
        <Col className='text-center mb-5'>
          <Button variant='primary' onClick={() => setModalShow(true)}>Add Review</Button>

             <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton className='align-items-start pb-1'>
                  <div className='d-grid'>

                  <Modal.Title id="contained-modal-title-vcenter">
                    Add Review
                  </Modal.Title>
                  <p >Tell Us about your experience.</p>
                  </div>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingPassword" label="Fullname" className='mb-2'>
                      <Form.Control type="text" placeholder="Fullname" id='fullName' value={fullName} onChange={(e)=> setFullName(e.target.value) }/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Heading" className='mb-2'>
                      <Form.Control type="text" placeholder="Heading" id='headingText' value={heading} onChange={(e)=> setHeading(e.target.value) }/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments" >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      id='commentText'
                      value={comment} onChange={(e)=> setComment(e.target.value) }
                    />
                  </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='outline-dark'onClick={()=> setModalShow(false)}>Cancel</Button>
                  <Button onClick={setData} >Submit</Button>
                </Modal.Footer>
              </Modal>
              {show ? <AddreviewAlert display='true' /> : null}
              
        </Col>
             
      </Row>
    </div>
  )
}

export default Reviews