import React, { useState } from 'react';
import './Review.css';
import review from './image/review.png'
const Review = () => {


  return (
    <div className='review'>
        <div className='info'>
            <span>TESTIMONALS</span>
            <h3>Here’s What Our Satisfied <br /> Clients Are Saying...</h3>
        </div>
        <div>
            <img src={review} alt="" srcset="" className='r_img' />
        </div>
    </div>
  );
};

export default Review;
