import React, { useState } from 'react';
import './OurImage.css';
import icon from './image/process.png'
const OurImage = () => {


  return (
    <div className='our_img'>
        <div className='info text-center info1'>
            <span>OUR PROCESSES</span>
            <h3>We have done more than <br />
            712+ Flooring Projects Successfully</h3>
            <p>Our design services starts and ends with a best in class experience <br /> strategy that builds brands.</p>
        </div>
        <div class="img_process">
                <img src={icon} alt="Wood Floor Repair Icon"/>
               <img src={icon} alt="Kitchen Strips Outs Icon" />
               <img src={icon} alt="Kitchen Strips Outs Icon" />
        </div>
    </div>
  );
};

export default OurImage;
