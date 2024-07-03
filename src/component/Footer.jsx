import React, { useState } from 'react';
import './Footer.css';
import icon1 from './image/facebook.png'
import icon2 from './image/instagram.png'
import icon3 from './image/telegram.png'
import icon4 from './image/linkedin.png'
import icon5 from './image/youtube.png'
import icon from './image/phone.png'
import logo from './image/logo.png'
const Footer = () => {


  return (
    <>
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section logo-section">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className="footer-contact">
                  
                    <div className="footer-phone">
                    <div className="footer-icon"></div>

                        Shop No. 10, Building Bane, <br />
                        Area Name, Landmark,<br />
                        City, Pincode - 123456                    </div>
                    <div className="footer-phone">
                        <span className="footer-phone"><img src={icon} alt="Facebook" /></span>
                        1234567890
                    </div>
                    <div className="footer-email">
                        <span className="footer-email-icon"></span>
                        shopname@gmail.com
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="#"><img src={icon1} alt="Facebook" /></a>
                    <a href="#"><img src={icon2} alt="Instagram" /></a>
                    <a href="#"><img src={icon3} alt="Telegram" /></a>
                    <a href="#"><img src={icon4} alt="YouTube" /></a>
                    <a href="#"><img src={icon5} alt="LinkedIn" /></a>
                </div>
            </div>
            <div className="footer-section services-section">
                <h4>Services</h4>
                <ul>
                    <li>Service No 1</li>
                    <li>Service No 2</li>
                    <li>Service No 3</li>
                    <li>Service No 4</li>
                    <li>Service No 5</li>
                </ul>
            </div>
            <div className="footer-section links-section">
                <h4>Quick Links</h4>
                <ul>
                    <li>Quick Links No 1</li>
                    <li>Quick Links No 2</li>
                    <li>Quick Links No 3</li>
                    <li>Quick Links No 4</li>
                    <li>Quick Links No 5</li>
                </ul>
            </div>
            <div className="footer-section newsletter-section">
                <h4>Newsletter</h4>
                <form>
                    <input type="email" placeholder="Enter Email Id" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
      
    </footer>
      <div className='color'>
        </div>
    </>
  );
};

export default Footer;
