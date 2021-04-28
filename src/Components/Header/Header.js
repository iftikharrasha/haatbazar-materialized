import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo.svg'; 
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">

                    {/* <Navbar expand="md">
                            <Navbar.Brand href="/home">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </Navbar.Brand>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                            <Navbar.Collapse id="basic-navbar-nav" className="menu">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/home" className="pr-4 active">Home</Nav.Link>
                                    <Nav.Link href="/outlets" className="pr-4">Outlets</Nav.Link>
                                    <Nav.Link href="/about" className="pr-4">About Us</Nav.Link>
                                    <Nav.Link href="/contact" className="pr-4">Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar> */}
                    

                        <nav className="navbar navbar-expand-md navbar-light">
                            <a href="/home" className="navbar-brand">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </a>
                            <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="ml-auto navbar-toggler collapsed">
                                <span className="navbar-toggler-icon">
                                </span>
                            </button>
                            <div className="menu navbar-collapse collapse" id="basic-navbar-nav">
                                <div className="ml-auto navbar-nav">
                                    <Link to="/home" className="pr-4 active nav-link">Home
                                        <div className="ripple-container">
                                        </div>
                                    </Link>

                                    <Link to="/outlets" className="pr-4 nav-link">Outlets</Link>
                                    <Link to="/about" className="pr-4 nav-link">About Us</Link>
                                    <Link to="/contact" className="pr-4 nav-link">Contact Us</Link>
                                </div>
                            </div>
                        </nav>

                </div>
            </header> 
        </>
    );
};

export default Header;