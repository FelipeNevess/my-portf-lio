import React from 'react';

import '../styles/OptionsHome.css';

function OptionsHome() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>

        <li>
          <a href="#portfolio">PORTFÓLIO</a>
        </li>

        <li>
          <a href="#about">ABOUT</a>
        </li>

        <li>
          <a href="#contact">CONTACTS</a>
        </li>
      </ul>
    </nav>
  );
}

export default OptionsHome;
