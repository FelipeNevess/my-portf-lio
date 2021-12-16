import React from 'react';

function Header() {
  return(
    <header>
      <p>Felipe Neves</p>
      <div>
        <nav>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>

            <li>
              <a href="portfolio">Portfólio</a>
            </li>

            <li>
              <a href="about">About</a>
            </li>

            <li>
              <a href="contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img src="***" alt="icon-whatsapp" />
        <p>numero de telefone</p>
      </div>
    </header>
  );
}

export default Header;
