import React, { useState } from 'react';
import './WhyUs.css';
import img1 from './image/img1.png';
import icon from './image/gallery.png'
const WhyUs = () => {


  return (
    <div className='why'>
        <img src={img1} alt="" className='W_img' />
        <div className='info'>
            <span>WHY CHOOSE US</span>
            <h3>About Alori Solutions flooring company</h3>
            <p>Slando is a full-service landscape company. Our established systems allow us to deliver industry-leading landscape solutions to commercial and residential clients.</p>
            <div className='pointer'>
                <img src={icon} alt="" srcset="" />
                <span className='span'>Hardwood Floor Repair</span>
            </div>
            <div className='pointer'>
                <img src={icon} alt="" srcset="" />
                <span className='span'>Custom projects with unique designs</span>
            </div>
            <div className='pointer'>
                <img src={icon} alt="" srcset="" />
                <span className='span'>We bring our showroom to your home.</span>
            </div>
        </div>
    </div>
  );
};

export default WhyUs;
