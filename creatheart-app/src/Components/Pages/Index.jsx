import React from 'react';
import Home from '../Home.js';
import About from '../About.jsx';
import Services from '../Services.jsx';
import Reviews from '../Reviews.jsx';
import ContactUs from '../ContactUs.jsx';
import Footer from '../Footer.jsx';
import NavBar from '../NavBar.js';

import { useState } from 'react';

function Index() {

    const [count,setCount] = useState(0);
  return (
    <div>
       
    <NavBar onClick={(e)=> setCount(e)} />    
    <Home />
  
    <Services count={count} setCount={(e)=> setCount(e)} />
  
    <About />
  
    <Reviews/>
  
    <ContactUs/>
    <Footer />
    </div>
  )
}

export default Index