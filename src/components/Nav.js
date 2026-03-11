import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Profile.css';

function Nav() {
  return (
    <nav className="site-nav">
      <NavLink to="/about" className={({isActive})=> isActive ? 'active-link' : ''}>About</NavLink>
      <NavLink to="/contact" className={({isActive})=> isActive ? 'active-link' : ''}>Contact</NavLink>
      <NavLink to="/experience" className={({isActive})=> isActive ? 'active-link' : ''}>Experience</NavLink>
      <NavLink to="/education" className={({isActive})=> isActive ? 'active-link' : ''}>Education</NavLink>
      <NavLink to="/works" className={({isActive})=> isActive ? 'active-link' : ''}>Works</NavLink>
    </nav>
  );
}

export default Nav;
