import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Template from '../../Assets/cv template.jpg';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)} className='mb-2'>
        International Resume Templates (from ₹1000 to ₹1300)
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen='true'
        backdrop="static"
        size='lg'
        aria-labelledby="example-custom-modal-styling-title"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            International Resume Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Col >
          <img src={Template} alt="" className='w-100'/>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;