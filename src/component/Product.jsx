import React, { useState } from 'react';
import './Product.css';
import img1 from './image/img2.png';
const Product = () => {


  return (
    <div className='product'>
        <img src={img1} alt="" className='W_img' />
        <div className='info'>
            <span>OUR PRODUCTS</span>
            <h3>Out Flooring <br />
            Hardwood, Material Stone, Laminate, Carpet</h3>
            <p>There are many variations of passages of Lorem Ipsum <br /> available but the majority have suffered alteration There are <br /> many variations of passages of Lorem Ipsum available but the <br /> majority have suffered alteration</p>
            <button>Our Products</button>
        </div>
    </div>

  );
};

export default Product;
