import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import UsersLogin from './Components/Users/UsersLogin.jsx';
import Index from './Components/Pages/Index.jsx';
import Preloader from './Components/Preloader';


function App() {
    
  return (
    <>
     <Preloader />
    <Router>
    <Routes>
      <Route path='/Admin' exact element={<AdminLogin />}></Route>
      <Route path='/Login' exact element={<UsersLogin/>}></Route>
      <Route path='/' element={<Index />}></Route>
    </Routes>
    </Router>
    
    
    

    </>
  );
}

export default App;
