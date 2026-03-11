import React from 'react';
import './../Profile.css';

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a href="https://www.linkedin.com/in/christian-kirby-ramos-7b7623315" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg"
          alt="LinkedIn"
          className="social-icon"
        />
      </a>
      <a href="https://github.com/RamosChristianKirby" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
          alt="GitHub"
          className="social-icon"
        />
      </a>
    </div>
  );
}

export default SocialSidebar;
