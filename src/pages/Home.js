import React, { useEffect, useState } from "react";
import { FaMedal } from 'react-icons/fa';

import '../styles/Home.css';
import perfiltest from '../images/perfil-p.png';

function Home() {
  const [saveDate, setSeveDate] = useState();

  const date_experience = () => {
    const now = new Date();
    const resultDate = now.getFullYear() - 2021;

    setSeveDate(resultDate);
  }

  useEffect(() => {
    date_experience();
  }, []);

  return (
    <section className="section-home" id="home">
      <div className="container-home">
        <div className="cont-sect-block-one">
          <div className="initial-text">
            <h1>Hey there,</h1>
            <h1>I’m Felipe</h1>
          </div>
          <p>fneves.dev@gmail.com</p>
          <div className="cont-year">
            <h1>{ saveDate }</h1>
            <div>
              <h4>YEARS</h4>
              <h4>EXPERTENCE</h4>
            </div>
          </div>
        </div>

        <div className="cont-image-perfil-home">
          <img src={ perfiltest } alt="felipe_neves_foto1" />
        </div>

        <div className="cont-sect-block-two">
          <div className="cont-text-two">
            <p>My business is programming</p>
            <p>and I love doing it.</p>
          </div>
          <div className="image-icon-medal">
            <a
              href="https://www.credential.net/5d2bb5f4-f168-441f-a38d-0617309ed16a#gs.j3lbz0"
              target="_blank"
              rel="noreferrer"
            >
              <FaMedal className="medal-1" />
            </a>
            <a
              href="https://www.credential.net/af4bb95b-5d50-4401-b63a-7bc7cb3d8c78"
              target="_blank"
              rel="noreferrer"
            >
              <FaMedal className="medal-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
