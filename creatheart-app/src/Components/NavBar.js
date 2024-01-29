
import Container from 'react-bootstrap/Container';
import logo from '../Assets/Logo.png';
import logotext from '../Assets/Logo text.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';


function NavBar() {

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
                  
                  <Button href="home" className='me-4 homebutton' variant="outline-warning">Home</Button>
                  <Dropdown >
                    <Dropdown.Toggle variant="outline-warning" id="dropdown-basic" className='me-2'>
                      Services
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Resume & CV Making</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">LinkedIn Profile Creation</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Poster Design</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Web Designing</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Advertisement Making</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Portfolio</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Animation</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Video Editing</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Photo Editing</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Logo Making</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Digital Marketing</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>

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
                  <Button href="about" className='me-4' variant="outline-warning">About</Button>
                  <Button href="#action2" className='me-4' variant="outline-warning">Contact Us</Button>
                </Nav>
                
            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavBar;