//Not sure yet if header or sidebard
//Contains links to home and results page
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const resize = () => {
      window.innerWidth <= 991 //Temp to test out
        ? setIsMobile(true)
        : setIsMobile(false);
    }
    window.addEventListener('resize', resize);
  })
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>The Shoppies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Results</Nav.Link>
          </Nav>
          <Nav>
            { !isMobile ? 
              (<NavDropdown title="Nominees" id="collasible-nav-dropdown">
                <NavDropdown.Item>Nominee <span>&#9747;</span></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Submit</NavDropdown.Item>
              </NavDropdown>
              ):(
                <div>No mobile</div>//Render as button on the bottom right of the screen 
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;