
import Container from 'react-bootstrap/Container';
import logo from '../Assets/Logo.png';
import logotext from '../Assets/Logo text.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar() {
  return (
    <>
    <Navbar  expand='lg' className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /><img
            alt=""
            src={logotext}
            width="110"
            height="15"
            className="d-inline-block align-top m-2"
          /></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"/>
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbar-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='active'>Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id="offcanvasNavbarDropdown-expand-md"
                  >
                    <NavDropdown.Item href="#action3">Resume</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      CV
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#action5">
                      Poster Design
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action6">Contact Us</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavBar;