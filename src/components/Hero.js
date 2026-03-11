import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../Resume/Christian Kirby Ramos-Resume.pdf';
import './../Profile.css';

function Hero() {
  return (
    <section id="hero" className="section hero-section">
      {/* professional logo or initials */}
      <div className="hero-logo"></div>
      <h1>Christian Kirby G. Ramos</h1>
      <p className="subtitle">Front‑End Web Developer</p>
      <p className="hero-description">
        I build scalable, performant applications using React, Vue, and
        modern web technologies. Passionate about clean UI, accessibility,
        and responsive design that delights users.
      </p>
      <div className="button-container">
        <Link to="/about" className="hero-button">Learn More</Link>
        <a
          href={resumePdf}
          download
          className="hero-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
