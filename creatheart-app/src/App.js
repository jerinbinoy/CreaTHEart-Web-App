
import Preloader from './Components/Preloader';
import './App.css';
import NavBar from './Components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Reviews from './Components/Reviews.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Footer from './Components/Footer.jsx';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin.jsx';

function App() {
    const [count,setCount] = useState(0);
  return (
    <>
    <Preloader />
    <NavBar onClick={(e)=> setCount(e)} />    
    <Home />
  
    <Services count={count} setCount={(e)=> setCount(e)} />
  
    <About />
  
    <Reviews/>
  
    <ContactUs/>
    <Footer />
    
    <Router>
    <Routes>
      <Route path='/Admin' element={<AdminLogin />}>
      </Route>
    </Routes>
    </Router>

    </>
  );
}

export default App;
