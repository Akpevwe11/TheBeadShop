import React from 'react'
import { Navbar, Nav, Container, NavDropdown,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const Header = () => {
    return <header style={{margin: "0"}}>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
     <LinkContainer to='/'>
    <Navbar.Brand href="/">TheBeadShop</Navbar.Brand>
    </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <LinkContainer to='cart'>
        <Nav.Link >
        <i className='fas fa-shopping-cart'>Cart</i>
        </Nav.Link>
        </LinkContainer>

        <LinkContainer to="login">
        <Nav.Link >
        <i className='fas fa-user'>Sign In</i>
        </Nav.Link>
        </LinkContainer>
        <LinkContainer to="products">
        <Nav.Link >
        <i className='fas fa-user'>Products</i>
        </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </header>
}

export default Header; 