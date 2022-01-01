import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
  <div className="container">
    <a className="navbar-brand" href=""><h2 className='text-primary mt-1'>MEJBA'S</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link active' to='/home'><span className='text-uppercase'>Home</span></Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link ' to='/about'><span className='text-uppercase'>About</span></Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to='/portfolio'><span className='text-uppercase'>Portfolio</span></Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/contact'><span className='text-uppercase'>Contact Me</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




        </div>
    );
};

export default Header;