import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
        <header>

        <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">eCommerce Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>

          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
  )
}

export default Header