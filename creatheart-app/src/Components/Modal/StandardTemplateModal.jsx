import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stan1 from '../../Assets/STAN 01.png';
import Stan2 from '../../Assets/STAN 02.png';
import Stan3 from '../../Assets/STAN 03.png';
import Stan4 from '../../Assets/STAND 04.png';
import Stan5 from '../../Assets/STAN 05.png';
import Stan6 from '../../Assets/STAN 06.png';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)} className='mb-2'>
       Standard Resume Template
      </Button>

      <Modal
        show={show}
        size='lg'
        onHide={() => setShow(false)}
        fullscreen='true'
        backdrop="static"
        aria-labelledby="example-custom-modal-styling-title"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Standard Resume Templates
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col className='d-grid justify-content-center p-2'>
            <img src={Stan1} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            <hr></hr>
            <img src={Stan2} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            <hr></hr>
            <img src={Stan3} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            <hr></hr>
            <img src={Stan4} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            <hr></hr>
            <img src={Stan5} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            <hr></hr>
            <img src={Stan6} alt="" className='w-100'/>
            <Button href='https://wa.me/p/6809792645705766/918758527897' variant='primary' className='text-center mt-2 mb-2'>Select</Button>
            
            
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;