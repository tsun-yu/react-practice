import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">React-Practice</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link>
              <Link to="/counter">Counter</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/calender">Calender</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product">Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Log In</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/404">404</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
