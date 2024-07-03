import React, { useState } from 'react';
import './Service.css';
import icon from './image/gallery1.png'
const service = () => {


  return (
    <div className='service'>
        <div className='info'>
            <span>OUR SERVICES</span>
            <h3>Services we Provide</h3>
            <p>Our design services starts and ends with a best in class experience <br />strategy that builds brands.</p>
        </div>
        <div class="services-container">
                <div class="service-card">
                    <div class="service-icon">
                        <img src={icon} alt="Wood Floor Repair Icon"/>
                    </div>
                    <h3 class="service-title">Wood Floor Repair</h3>
                    <p class="service-description">Refresh Your Interior With New design Flooring Looking to install new interior look.</p>
                    <a href="#" class="service-link">Read More</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <img src={icon} alt="Kitchen Strips Outs Icon" />
                    </div>
                    <h3 class="service-title">Kitchen Strips Outs</h3>
                    <p class="service-description">Refresh Your Interior With New design Flooring Looking to install new interior look.</p>
                    <a href="#" class="service-link">Read More</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <img src={icon} alt="Floor Removal Icon" />
                    </div>
                    <h3 class="service-title">Floor Removal</h3>
                    <p class="service-description">Refresh Your Interior With New design Flooring Looking to install new interior look.</p>
                    <a href="#" class="service-link">Read More</a>
                </div>
             </div>
     
    </div>
  );
};

export default service;
