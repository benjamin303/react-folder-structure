import React from 'react';
import './style.scss';
import {Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className=" justify-content-end">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about123">NotFound</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
  }
}

export default Header;
