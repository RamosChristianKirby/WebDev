import React, { useState } from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hello, I'm <strong>Christian Kirby G. Ramos</strong>, a front‑end web
          developer with a passion for crafting high‑performance, scalable user
          interfaces. I leverage modern frameworks such as React, Next.js, and Vue
          while embracing TypeScript and progressive enhancement to ensure that
          applications are robust and accessible. My focus is on intuitive user
          experiences, strict adherence to accessibility standards, and
          responsive design across devices.
        </p>
        <ul className="about-bullets">
          <li>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg"
                alt="React logo"
              />
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg"
                alt="CSS logo"
              />
            </a>
          </li>
          <li>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg"
                alt="MongoDB logo"
              />
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg"
                alt="HTML5 logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
