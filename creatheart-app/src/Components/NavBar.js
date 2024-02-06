
import Container from 'react-bootstrap/Container';
import logo from '../Assets/Logo.png';
import logotext from '../Assets/Logo text.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/esm/Button';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';



function NavBar({onClick}) {

  return (
    <>
    <Navbar  expand='lg' className="bg-body-tertiary fixed-top" data-bs-theme="dark" bg="dark"  id='navbar'>
          <Container fluid>
            
            
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbar-expand-md"
              placement="start"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  <Button href="#homeSection" className='me-4 homebutton' variant="outline-warning">Home</Button>
                  <Button href="#servicesSection" className='me-2 servicesbutton' variant="outline-warning">Services</Button>

                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
              
              

              <Navbar.Brand href="home"  ><img
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
              /></Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"/>  
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbar-expand-md"
              placement="end"
               >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Button href="#aboutSection" className='me-4' variant="outline-warning">About</Button>
                  <Button href="#contactSection" className='me-0' variant="outline-warning">Contact Us</Button>
                </Nav>
                  <a className='pe-3' href='https://wa.me/918758527897?text=I%20wish%20to%20know%20more%20about%20CreaTHEart'><FontAwesomeIcon icon={faWhatsapp}  size='2x' className='socialMediaLink'/></a>
                
            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavBar;