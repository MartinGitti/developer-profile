import React from 'react'; // Import React library.
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'; // Import React-bootstrap Components

/* Funtion created to render React-bootstrap components below.*/
function Menu () {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">My Profile:</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https:www.linkedin.com/in/martinreedsafari" target="_blank">LinkedIn Profile:</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#Connect-div">Projects:</NavDropdown.Item>
          <NavDropdown.Item href="#AboutMe-div">About Me:</NavDropdown.Item>
          <NavDropdown.Item href="#Education-div">Education:</NavDropdown.Item>
          <NavDropdown.Item href="#App-logos">Skills:</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Menu; // Export Component to App.js to display on browser.