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

                    <Navbar expand="md">
                            <Navbar.Brand href="/home">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </Navbar.Brand>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                            <Navbar.Collapse id="basic-navbar-nav" className="menu">
                                <Nav className="ml-auto">
                                    <Nav.Link className="pr-4 active"><Link to="/home">Home</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/outlets">Outlets</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/about">About</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/contact">contact</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    

                        {/* <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/home" className="navbar-brand">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
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
                        </nav> */}

                </div>
            </header> 
        </>
    );
};

export default Header;