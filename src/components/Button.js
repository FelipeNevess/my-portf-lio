import React, { useState } from 'react';

import { RiMenu5Fill } from 'react-icons/ri';

import '../styles/Button.css';

function Button() {
  const [ menuButton, setMenuButton ] = useState(false);

  const hadleClick = () => {
    setMenuButton(!menuButton);
  }

  return (
    <div className="cont-menu-button" onClick={ hadleClick }>
      <nav className={ menuButton ? 'onMenu' : 'offMenu' }>
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
      <div>
        <RiMenu5Fill className="menu-button">
          <button type="button" />
        </RiMenu5Fill>
      </div>
    </div>
  );
}

export default Button;
