import React from 'react';
import { Badge } from '@material-ui/core';
import { Height, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import {Container, Nav, Navbar, Offcanvas, 
    NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
    import { logout } from '../action/userActions'
    
  import { Announcements } from './Announcements';
  import {LinkContainer } from 'react-router-bootstrap';
    

export const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state=> state.userLogin)
  const { userInfo } = userLogin 

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>

     <Announcements /> 
    <Navbar bg="white" expand={false}>
    <LinkContainer to='/'>
  <Container fluid className="justify-content-center">
        <Navbar.Brand href="#" style={{ fontSize: "40px"  }}>THEBEADSHOP</Navbar.Brand>
               
  </Container>
</LinkContainer>
</Navbar>

<Navbar bg="white" expand="lg">
  <Container fluid className="justify-content-center" >
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
   
      <Nav
      
        className="m-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
        
      >
          <LinkContainer to='/'>
        <Nav.Link href="#action1">HOME</Nav.Link>
        </LinkContainer>
        <Nav.Link href="#action1">BEST SELLERS</Nav.Link>
        <Nav.Link href="#action1">NEW ARRIVALS</Nav.Link>
        <Nav.Link href="#action1">SHOP ALL </Nav.Link>
        <Nav.Link href="#action1">SHOP BY STYLE </Nav.Link>
        <Nav.Link href="#action1">SHOP BY COLLECTION </Nav.Link>
        
      </Nav>
      <LinkContainer to='/cart'>
      <Badge badgeContent={4} color="primary">
               
                <ShoppingCartOutlined style={{width: "60px", height: "60px", cursor: "pointer" }}/>
                
            </Badge>
      </LinkContainer>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
  
 
  </>
  );
};




export default Header; 