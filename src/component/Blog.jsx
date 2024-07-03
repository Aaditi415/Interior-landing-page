import React, { useState } from 'react';
import './Blog.css';
import icon from './image/blog.png'
const Blog = () => {


  return (
    <div className='blog'>
        <div className='info'>
            <span>BLOGS</span>
            <h3>Articles daily updated latest articles <br />
            directly from the blog</h3>
        </div>
        <section class="blog">
        <div class="blog-container">
            <div class="blog-card">
                <img src={icon} alt="Service Image" />
                <div class="blog-info">
                    <div class="blog-date">
                        <div class="icon"></div>
                        <span>4 Dec 2022</span>
                    </div>
                    <h3>Best Flooring for Modern Kitchen</h3>
                    <p>Nulla vitae dolor eget enim accumsan aliquet. Cras lobortis feugiat ipsum.</p>
                </div>
            </div>
            <div class="blog-card">
            <img src={icon} alt="Service Image" />
            <div class="blog-info">
                    <div class="blog-date">
                        <div class="icon"></div>
                        <span>4 Dec 2022</span>
                    </div>
                    <h3>Best Flooring for Modern Kitchen</h3>
                    <p>Nulla vitae dolor eget enim accumsan aliquet. Cras lobortis feugiat ipsum.</p>
                </div>
            </div>
            <div class="blog-card">
            <img src={icon} alt="Service Image" />
            <div class="blog-info">
                    <div class="blog-date">
                        <div class="icon"></div>
                        <span>4 Dec 2022</span>
                    </div>
                    <h3>Best Flooring for Modern Kitchen</h3>
                    <p>Nulla vitae dolor eget enim accumsan aliquet. Cras lobortis feugiat ipsum.</p>
                </div>
            </div>
        </div>
        </section>
        
    </div>
  );
};

export default Blog;
