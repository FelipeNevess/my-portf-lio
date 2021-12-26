import React from 'react';

import Button from './Button';
import OptionsHome from './OptionsHome';

import '../styles/Header.css'

import { FaWhatsapp } from 'react-icons/fa';

function Header() {
  return(
    <header>
      <div className="container-header">
        <p className="header-logo">Felipe Neves</p>
        <OptionsHome />
        <Button />
        <div className="con-number">
          <FaWhatsapp className="far-whats-header" />
          <p>+55 (86) 99458-0624</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
