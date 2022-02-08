import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown,Form, FormControl,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../action/userActions'
import '../Carousel.css'


const Header = () => {

  const dispatch = useDispatch()

    const userLogin = useSelector(state=> state.userLogin)
    const { userInfo } = userLogin 

    const logoutHandler = () => {
      dispatch(logout())
    }

    return (
    <>  
   
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className="applyfonts">
  <Container fluid>
     <LinkContainer to='/'>
    <Navbar.Brand href="/">TheBeadShop</Navbar.Brand>
    </LinkContainer>
    
       
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
     
                {userInfo ? (
         <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
         </NavDropdown>

          ) : <LinkContainer to="login">
        <Nav.Link >
        <i className='fas fa-user'>Sign In</i>
        </Nav.Link>
        </LinkContainer>}
        
        <LinkContainer to="products">
        <Nav.Link >
        <i className='fas fa-user'>Products</i>
        </Nav.Link>
        </LinkContainer>

        <LinkContainer to='cart'>
        <Nav.Link>
          <i className='fas fa-shopping-cart'></i>
        </Nav.Link>
        </LinkContainer>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

  
    </>
    )
}

export default Header; 