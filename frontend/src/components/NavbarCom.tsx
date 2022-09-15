import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavbarCom: FC = () => {
  return (
    <Navbar bg='light' expand='md'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Blog app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/english'>
              English
            </Nav.Link>
            <Nav.Link as={NavLink} to='/programming'>
              Programming
            </Nav.Link>
            <Nav.Link as={NavLink} to='/create'>
              Add Post
            </Nav.Link>
            <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item as={NavLink} to='/mypage'>
                My page
              </NavDropdown.Item>
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
