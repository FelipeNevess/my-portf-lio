import React from 'react';

import '../styles/Header.css'

import { FaWhatsapp } from 'react-icons/fa';

function Header() {
  return(
    <header>
      <div className="container-header">
        <p className="header-logo">Felipe Neves</p>
        <nav>
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
        <div className="con-number">
          <FaWhatsapp className="far-whats-header" />
          <p>+55 (86) 99458-0624</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
