import React from 'react';
import logo from '../../img/logo.svg'; 
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    function activeToggle(){
        document.getElementById('toggle-btn').classList.toggle('active');
        document.getElementById('mobile-nav').classList.toggle('active');
    }

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
                                    <Nav.Link className="pr-4 active"><Link to="/home">Home</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/outlets">Outlets</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/about">About</Link></Nav.Link>
                                    <Nav.Link className="pr-4"><Link to="/contact">contact</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar> */}
                    

                        {/* <nav className="navbar navbar-expand-sm navbar-light NavbarItems">
                            <Link to="/home" className="navbar-brand">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                </span>
                            </button>

                             <button className="menu-icon" id="toggle-btn" onClick={activeToggle} aria-label="Main Menu">
                                <svg width="70" height="70" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </button>
                            <div className="nav-menu navbar-collapse collapse" id="basic-navbar-nav">
                                <div className="ml-auto navbar-nav nav-menu" id="mobile-nav">
                                    <Link to="/home" className="pr-4 active nav-link">Home</Link>
                                    <Link to="/outlets" className="pr-4 nav-link">Outlets</Link>
                                    <Link to="/about" className="pr-4 nav-link">About Us</Link>
                                    <Link to="/contact" className="pr-4 nav-link">Contact Us</Link>
                                </div>
                            </div>
                        </nav> */}


                        <nav className="navbarItems">
                            <Link to="/home" className="navbar-logo">
                                <img src={logo} width="70" className="d-inline-block align-top" alt="logo"/>
                            </Link>

                             <div className="menu-icon" id="toggle-btn" onClick={activeToggle}>
                                <svg width="50" height="50" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>
                            <div className="nav-menu" id="mobile-nav">
                                    <Link to="/home" className="pr-4 active nav-links" onClick={activeToggle}>Home</Link>
                                    <Link to="/outlets" className="pr-4 nav-links" onClick={activeToggle}>Outlets</Link>
                                    <Link to="/about" className="pr-4 nav-links" onClick={activeToggle}>About Us</Link>
                                    <Link to="/contact" className="pr-4 nav-links" onClick={activeToggle}>Contact Us</Link>
                            </div>
                        </nav>

                </div>
            </header> 
        </>
    );
};

export default Header;