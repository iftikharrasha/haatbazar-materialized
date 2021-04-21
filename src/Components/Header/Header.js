import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo.svg'; 
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Navbar expand="md">
                        <Navbar.Brand href="#home">
                            <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="menu">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home" className="pr-4 active">Home</Nav.Link>
                                <Nav.Link href="#link" className="pr-4">Outlets</Nav.Link>
                                <Nav.Link href="#home" className="pr-4">About Us</Nav.Link>
                                <Nav.Link href="#link" className="pr-4">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header> 
        </>
    );
};

export default Header;