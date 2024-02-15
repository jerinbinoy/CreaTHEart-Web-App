import React, { useContext, useEffect, useState } from 'react'
import {Row,Card,Button,Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Review.css';
import {FirebaseApp} from '../Firebase/config';
import { collection,getDocs} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import AddreviewAlert from './Alerts/AddreviewAlert';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Context/AuthContext';
import UsersLogin from './Users/UsersLogin';

function Reviews() {
  const [modalShow, setModalShow] = React.useState(false);
  const [reviewsData,setreviewsData] = useState([]);
  const [fullName, setFullName] = useState('');
  const [heading, setHeading] = useState('');
  const [comment, setComment] = useState('');
  const [show, setShowing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function handleclick(){
      const querySnapshot = await getDocs(collection(FirebaseApp,"Reviews"));
        setreviewsData(querySnapshot);
    }
    handleclick();  
  }, []);
  
 const finalData = [];

 reviewsData.forEach((doc,id) => {
        let individualData = doc.data();
        finalData.push(
          <Card  text='white' style={{ width: '16rem'}} className="mb-5 ms-5 mt-3 Cards" id={id}>
          <Card.Header className="headerText">{individualData.Name}</Card.Header>
          <Card.Body>
            <Card.Title>{individualData.Heading}</Card.Title>
            <Card.Text>
              {individualData.Comment}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="footerText">{individualData.Date}</Card.Footer>
          </Card>
            );  
})  
async function setData(){
  setLoading(true);
    const d = new Date();
     let year = d.getFullYear();
     let month = d.getMonth();
     let date = d.getDate();
     let fullDate = date+"/"+month+'/'+year;
    await setDoc(doc(FirebaseApp, "Reviews",fullName), {
      Name: fullName,
      Heading: heading,
      Comment: comment,
      Date: fullDate
    });
    setModalShow(false);
    setShowing(true);
    setLoading(false);
  }
  return (
    <div>
      <Row className='Reviews'>
            <Row>
                <h2 className='text-center text-white mt-3 mb-1'>Reviews</h2>
            </Row>
            
        <Row className='reviewsRow p-0 mb-3' id='reviewsRow'>
       
        { finalData}
        </Row>
        <Col className='text-center mb-5'>
          <Button variant='warning' onClick={() => user ? setModalShow(true) : setLoginAlert(true)}>Add Review</Button>
              {loginAlert ? <UsersLogin /> : null}
             <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                variant="dark"
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
                  <Form noValidate>
                    <FloatingLabel controlId="floatingName" label="Fullname" className='mb-2'>
                      <Form.Control type="text" placeholder="Fullname" id='fullName' value={fullName} onChange={(e)=> setFullName(e.target.value) } required/>
                      <Form.Control.Feedback>Nice Name!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Heading" className='mb-2'>
                      <Form.Control type="text" placeholder="Heading" id='headingText' value={heading} onChange={(e)=> setHeading(e.target.value) } required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments" >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      id='commentText'
                      value={comment} onChange={(e)=> setComment(e.target.value) }
                      required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='outline-dark'onClick={()=> setModalShow(false)}>Cancel</Button>
                  <Button onClick={setData} disabled={isLoading}>
                  { isLoading ? <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        /> : null }
                    {isLoading ? 'Submitting…' : 'Submit'}
                  </Button>
                </Modal.Footer>
              </Modal>
              {show ? <AddreviewAlert display='true' /> : null}
              
        </Col>
             
      </Row>
    </div>
  )
}

export default Reviews