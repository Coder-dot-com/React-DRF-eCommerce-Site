import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
        <header className="py-1 px-5">

        <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand >eCommerce Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer  to='/login'>
            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>

          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
  )
}

export default Header