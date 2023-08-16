import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/wischool-logo.svg';
import './Navbar.css';
import userIcon from '../../assets/carbon_user-avatar.svg';

function AppNavbar() {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        alt=""
                        src={logo}
                        width="120"
                        height="41"
                        className="d-inline-block align-top main-logo"
                    />
                </Navbar.Brand>
                <Nav.Link href="#link" className='user-icon'>
                    <img
                    alt=""
                    src={userIcon}
                    width="120"
                    height="41"
                    className="d-inline"
                    />
                </Nav.Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-icon">
                    <span className="hamburger-lines"></span>
                    <span className="hamburger-lines"></span>
                    <span className="hamburger-lines"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='link'>Home</Nav.Link>
                        <Nav.Link href="#link" className='link'>Courses</Nav.Link>
                        <Nav.Link href="#link" className='link'>Instructors</Nav.Link>
                        <Nav.Link href="#link" className='link'>Schedules</Nav.Link>
                        <Nav.Link href="#link" className='link'>Contact Us</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <div className="d-flex align-items-center ml-4 link search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="#6A0000" />
                            </svg>
                        </div>
                        <Nav.Link href="#link" className='link link-login'>Login</Nav.Link>
                        <Nav.Link href="#link" className='link link-register '>Register</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
