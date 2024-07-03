import React, { useState } from 'react';
import './AboutUs.css';
import img1 from './image/img3.png';
import icon from './image/gallery.png'
const AboutUs = () => {


  return (
    <div className='about'>
        
        <img src={img1} alt="" className='a_img2' />
        <div className='info'>
            <span>OUR NUMBERING</span>
            <h3>Expert Flooring Installers</h3>
            <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration</p>
            <div class="stats-container">
                <div class="stat">
                    <div class="number">5k+</div>
                    <div class="description">Completed Projects</div>
                </div>
                <div class="stat">
                    <div class="number">30+</div>
                    <div class="description">Our Expert Team</div>
                </div>
            </div>
            <div className='text'>
                <span>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration</span>
            </div>
        </div>
        <img src={img1} alt="" className='a_img' />
       
    </div>
  );
};

export default AboutUs;
