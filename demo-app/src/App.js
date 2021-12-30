import React from "react";
import './App.css'
//pages

import Users from "./components/Users";
import About from "./components/About";
import User from "./components/User";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
   
    <Router >
      <div className='App'>
        <h1 > My Routing Page</h1>
        <nav>
          <ul className='header'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
           
          </ul>
        </nav>
        <hr />

        
        <Routes>
         
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/user/:id' element={<User/>} />
          
          
        </Routes>
      </div>
    </Router>
 
  );
}


export default App;
