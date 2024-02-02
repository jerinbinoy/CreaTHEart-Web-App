import React, { useState } from 'react'
import './ContactUs.css';
import {Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {FirebaseApp} from '../Firebase/config';
import { doc, setDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';



function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    let isStopped = event.isPropagationStopped()
    if (!isStopped){
        setData().then(()=>{
          setLoading(false);
        })
        };
 
        
async function setData(){
          const d = new Date();
           let year = d.getFullYear();
           let month = d.getMonth();
           let date = d.getDate();
           let fullDate = date+"/"+month+'/'+year;
          await setDoc(doc(FirebaseApp, "Comments",event.target[0].value), {
            Name: event.target[0].value ,
            Email:event.target[1].value,
            Comment: event.target[2].value,
            Date: fullDate
          });
          setShow(true);
        }
      }

  return (
    <div className='contactUsSection' id='contactSection'>
        <Row className=' collectionOfImages m-0 p-0'>
                
        </Row>
        <Row>
            <h2 className='text-center contactUsTitle mt-3'>Contact Us</h2>
        </Row>
        <Row className='mt-5 '>
          <ul className='d-flex socialMediaLinks justify-content-center align-items-center' id='socialMediaLinks'>
            <a className='pe-5'  href='mailto:creatheartofficial@gmail.com'><FontAwesomeIcon icon={faEnvelope} color='white' size='2x' className='socialMediaLink' /></a>
            <a className='pe-5' href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F918758527897&e=AT37c40OJuw9x4le06UcQP05IeIQtUKOcDEq4Gnkc-K3mn-E2Ef0Zg7GkKidbT2eX8t0G9VaW8F1ghH-fbyvKjFD-l59o1WFF8vJa9lmDimmQ4pu8hIs98A'><FontAwesomeIcon icon={faWhatsapp} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='https://www.instagram.com/creatheart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><FontAwesomeIcon icon={faInstagram} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='https://m.facebook.com/creatheartofficial'><FontAwesomeIcon icon={faFacebook} color='white' size='2x' className='socialMediaLink'/></a>
            <a className='pe-5' href='tel:+918758527897'><FontAwesomeIcon icon={faPhone} color='white' size='2x' className='socialMediaLink'  /></a>
          </ul>
        </Row>
        <Row className='d-flex justify-content-center'  >
            <Row className='contactForm  m-5 '>
              <h3 className='text-center mt-2 contactFormTitle text-white'>Write to us</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                      <Form.Label className='text-white'>Name</Form.Label>
                      <Form.Control size='sm' type="text" placeholder="Fullname" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label className='text-white'>Email</Form.Label>
                      <Form.Control size='sm' type="email" placeholder="name@example.com" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                      <Form.Label className='text-white'>Comment</Form.Label>
                      <Form.Control as="textarea" rows={3} required/>
                      <Form.Control.Feedback type="invalid">
                        This field is required
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className='text-center'>
                    <Button variant="warning" type="submit" className='mb-3 'disabled={isLoading}>
                      { isLoading ? <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        /> : null }
                    {isLoading ? 'Submitting…' : 'Submit'}
                    </Button>
                    </div>
                </Form>
                {
                  show ? <Alert variant="success" onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>Successfully submitted your response.</Alert.Heading>
                  </Alert> : null
                  
                }
                
            </Row>  
        </Row>
        
        
    </div>
  )
}

export default ContactUs