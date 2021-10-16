import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

import logo from '../../../img/logo2.png'
import { HashLink } from 'react-router-hash-link';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <Navbar bg="white" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand href="#home"><img className='header-logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink style={{padding:'8px'}} className='nav-item' to='/home'> Home </NavLink>
                        <Nav.Link className='nav-item' as={HashLink} to="/home#food">Food</Nav.Link>
                        <Nav.Link className='nav-item' as={HashLink} to="/home#WhyUs">Why us</Nav.Link>
                        { user.email ? <Button onClick={logOut}> Sign Out</Button>:
                            <NavLink style={{padding:'8px'}} className='nav-item' to='/login'> Login </NavLink>}
                            {user.email && <small> {user.displayName}</small> }
                        <NavLink className='signup nav-item text-white' to='/signup'> Sign up </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;