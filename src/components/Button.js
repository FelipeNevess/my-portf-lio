import React, { useState } from 'react';

import { RiMenu5Fill } from 'react-icons/ri';

import '../styles/Button.css';

function Button() {
  const [ menuButton, setMenuButton ] = useState(false);

  const hadleClick = () => {
    setMenuButton(!menuButton);
  }

  return (
    <div className="cont-menu-button">
      <nav className={ menuButton ? 'onMenu' : 'offMenu' }>
        <ul>
          <li>
            <a href="#home" className="exit-menu">HOME</a>
          </li>

          <li>
            <a href="#portfolio" className="exit-menu">PORTFÓLIO</a>
          </li>

          <li>
            <a href="#about" className="exit-menu">ABOUT</a>
          </li>

          <li>
            <a href="#contact" className="exit-menu">CONTACTS</a>
          </li>
        </ul>
      </nav>
      {
        !menuButton ?
        (
          <div onClick={ hadleClick }>
            <RiMenu5Fill className="menu-button">
              <button type="button" />
            </RiMenu5Fill>
          </div>
        )
          :
        <button type="button" className="off" onClick={ hadleClick }>
          <span>X</span>
        </button>
      }
    </div>
  );
}

export default Button;
