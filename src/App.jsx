// src/App.js
import React from 'react';
import Navbar from './component/Navbar'
import WhyUs from './component/WhyUs';
import AboutUs from './component/AboutUs';
import Service from './component/Service';
import Product from './component/Product';
import Process from './component/Process';
import OurImage from './component/OurImage';
import Contact from './component/Contact';
import Review from './component/Review';
import Blog from './component/Blog';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <WhyUs/>
      <AboutUs/>
      <Service/>
      <Product/>
      <Process/>
      <OurImage/>
      <Contact/>
      <Review/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
