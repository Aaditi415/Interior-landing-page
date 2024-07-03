import React, { useState } from 'react';
import './Process.css';
import icon from './image/Ellipse.png'
const Process = () => {


  return (
    <div className='process'>
        <div className='info'>
            <span>OUR PROCESSES</span>
            <h3>Our Smart Processes</h3>
            <p>Our design services starts and ends with a best in class experience <br /> strategy that builds brands.</p>
        </div>
        <div class="processs-container">
                <div class="process-card col-sm-6">
                    <div class="process-icon">
                        <img src={icon} alt="Wood Floor Repair Icon" className='p_img'/>
                    </div>
                    <h3 class="process-title">Color Board</h3>

                </div>
                <div class="process-card col-sm-6">
                    <div class="process-icon">
                        <img src={icon} alt="Kitchen Strips Outs Icon" className='p_img' />
                    </div>
                    <h3 class="process-title">Dimention</h3>
                   
                </div>
                <div class="process-card col-sm-6">
                    <div class="process-icon">
                        <img src={icon} alt="Floor Removal Icon" className='p_img' />
                    </div>
                    <h3 class="process-title">Installution</h3>
                   
                </div>
                <div class="process-card col-sm-6">
                    <div class="process-icon">
                        <img src={icon} alt="Floor Removal Icon" className='p_img' />
                    </div>
                    <h3 class="process-title">Finishing</h3>
                   
                </div>
             </div>
     
    </div>
  );
};

export default Process;
