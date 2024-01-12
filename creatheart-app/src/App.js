
import Preloader from './Components/Preloader';
import './App.css';
import NavBar from './Components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import About from './Components/About.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    
  return (
    <>
    <Preloader />
    <NavBar />
    <Home />
    <About />
    </>
  );
}

export default App;
