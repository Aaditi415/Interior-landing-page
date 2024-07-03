import React, { useState } from 'react';
import './Navbar.css';
import logo from './image/logo.png';
import search from './image/search.png'
import icon from './image/icon.png'
import icon1 from './image/icon1.png'
import icon2 from './image/icon2.png'
import icon3 from './image/icon3.png'
import icon4 from './image/icon4.png'



const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
    <div className='color'>
    <span><img src={icon} alt="" /> 1234567890</span>
    <div className='color1'>
        <span><img src={icon1} alt="" /></span>
        <span><img src={icon2} alt="" /></span>
        <span><img src={icon3} alt="" /></span>
        <span><img src={icon4} alt="" /></span>

      </div>
    </div>
    <div className="main">
    <nav className=" navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`links ${menuActive ? 'active' : ''}`}>
        <a href="#" >Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <img src={search} alt="" srcset="" />
      </div>
    </nav>
    <main>
      <p>A Complete Solution for Your Flooring Vision.
      </p>
      <h1>Welcome to Our Alori <br /> Flooring Solutions</h1>
      <button>Our Solutions</button>
    </main>
    </div>
    </>
  );
};

export default Navbar;
