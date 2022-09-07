import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarCom: FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Blog app</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#english'>English</Nav.Link>
            <Nav.Link href='#programming'>Programming</Nav.Link>
            <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>My page</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;
