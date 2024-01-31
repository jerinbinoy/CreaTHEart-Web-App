import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Template from '../../Assets/cv template.jpg';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)} className='mb-2'>
       Standard Resume Template
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen='true'
        aria-labelledby="example-custom-modal-styling-title"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Standard Resume Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Template} alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;