
import Container from 'react-bootstrap/Container';
import logo from '../Assets/Logo.png';
import logotext from '../Assets/Logo text.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';


function NavBar() {
  return (
    <>
    <Navbar  expand='lg' className="bg-body-tertiary" data-bs-theme="dark" bg="dark"  >
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
                  <Nav.Link href="#action1" className='active me-4'>Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
              
              

              <Navbar.Brand href="#"  ><img
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
                  <NavDropdown
                    title="Services"
                    id="offcanvasNavbarDropdown-expand-md"
                    className='me-4'
                  >
                    <NavDropdown.Item href="#action3">Resume</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      CV
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#action5">
                      Poster Design
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                       Portfolio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                       Advertisement Making
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action8">Contact Us</Nav.Link>
                </Nav>
                
            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavBar;