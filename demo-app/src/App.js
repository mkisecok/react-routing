import React from "react";
import './App.css'
//pages

import Users from "./components/Users";
import About from "./components/About";
import User from "./components/User";
import Photos from "./components/Photos";
import Image from './components/Image'

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
              <Link to="/photos">Photos</Link>
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
         
          <Route path='/photos' element={<Photos/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/user/:id' element={<User/>} />
          <Route path='/image/:id' element={<Image/>} />
          
        </Routes>
      </div>
    </Router>
 
  );
}


export default App;
