import React, { useState } from 'react';
import './Contact.css';
import contact from './image/contact.png';
const Contact = () => {


  return (
    <div className='contact'>

        <div className='info'>
            <span>CONTACT US</span>
            <h3>Lets Create Something Great Together <br /></h3>
            <p>Slando is a full-service landscape company. Our established
            systems allow us to deliver industry</p>
            <input type="text" placeholder='Enter Full Name' />
            <input type="tel" placeholder='Enter Mobile Number'/>
            <textarea placeholder='Enter Your Message' />
            <br />
            <button>Send</button>
        </div>
        <img src={contact} alt="" className='W_img' />

    </div>

  );
};

export default Contact;
