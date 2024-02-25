import { React, useEffect, useState, useRef, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './Home';
import Login from './Login'
import Details from './Details';
import CheckOut from './CheckOut';
import CheckIn from './CheckIn';

const Navbar = () => {
  return (
    <div className='nab-wrapper'>
      <BrowserRouter>
        <nav className="nab">
            <a className='nab-item'><NavLink to='/' target='_self'>Home</NavLink></a>
            <a className='nab-item'><NavLink to='/login' target='_self'>Login</NavLink></a>
        </nav>
          
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/details' element={<Details />} />
            <Route exact path='/check-out' element={<CheckOut />} />
            <Route exact path='/check-in' element={<CheckIn />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Navbar;