import React from "react";
import './App.css'
//pages

import Users from "./components/Users/Users";
import About from "./components/About/About";
import User from "./components/Users/User";
import Home from './components/Home/Home'
import Photo from "./components/Home/Photo";
import Error404 from "./components/Error404/Error404";
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
           
          </ul>
        </nav>
        <hr />

        
        <Routes>
         
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/user/:id' element={<User/>} />
          <Route path='/photo/:id' element={<Photo/>} />
          <Route path='*' element={<Error404/>} />
          
        </Routes>
      </div>
    </Router>
 
  );
}


export default App;
