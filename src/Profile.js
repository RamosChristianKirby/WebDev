import React from 'react';
import './Profile.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Works from './components/Works';

function Profile() {
  return (
    <div className="profile-container">
      <Nav />
      <SocialSidebar />
      <Hero />

      <About />
      <Contact />
      <Experience />
      <Education />
      <Works />
    </div>
  );
}

export default Profile;
