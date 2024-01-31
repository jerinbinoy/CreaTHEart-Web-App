import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import StandardTemplateModal from './StandardTemplateModal';
import BasicModal from './BasicModal';
import InternationalModal from './InternationalModal';
import EuropassModal from './EuropassModal';


function ServiceModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)}>
        Templates
      </Button>

      <Modal
        show={show}
        backdrop="static"
        onHide={() => setShow(false)}
        centered
        aria-labelledby="example-custom-modal-styling-title"
        className='serviceFirstModal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Resume Templates
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col className='d-grid'>
            <StandardTemplateModal />
            <BasicModal />
            <InternationalModal />
            <EuropassModal />
            </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={()=>setShow(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServiceModal;