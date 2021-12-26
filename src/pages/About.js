import React from 'react';

import '../styles/About.css';

import Felipe from '../images/perfil.jpg';

function About() {
  return(
    <section className="section-about" id="about">
      <div className="container-about">
        <div className="sidebar-1">
          <h1>ABOUT ME</h1>
          <div>
            <p>
              Meu nome é Felipe tenho 23 anos sou desenvolvedor Junior, estudo atualmente na Trybe e sou recém-formado em Desenvolvimento Front-end,
              utilizando a biblioteca React, aprendi todo o módulo de fundamentos essenciais para o Desenvolvimento Web, como, Unix, Bach, Git,
              GitHunb, HTML, Css, a linguagem JavaScript - ES6 e teste automatizados com uso do Jest. Ainda estou em processo de aprendizagem na Trybe,
              já começei a dar meus primeiros passos em Desenvolvimento Back-end que é uma coisa totalmente nova para mim. Ou seja aos poucos vou
              contendo um leque enorme de aprendizagem, tanto de Hard Skills como Soft Skills e ir construindo minha carreira e me tornar
              aquilo que eu sempre sonhei em ser...PROGRAMADOR.
            </p>
          </div>
        </div>
        <div className="sidebar-2">
          <div className="block-contact-info">
            <div className="con-img-perfil">
              <img src={ Felipe } alt="felipe-perfil" />
            </div>
            <div className="info-profile">
              <div className="order">
                <p className="info">Full name:</p>
                <p className="info-result">Felipe Neves</p>
              </div>
              <div className="order">
                <p className="info">Birthday:</p>
                <p className="info-result">17/08/1998</p>
              </div>
              <div className="order">
                <p className="info">Cellphone number:</p>
                <p className="info-result">(86) 99458-0624</p>
              </div>
              <div className="order">
                <p className="info">E-mail:</p>
                <p className="info-result">fneves.dev@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="block-skill-info">
            <h4>SKILLS</h4>
            <div className="w3-container">
              <div className="w3-config con-c1">
                <h4>React</h4>
                <div className="w3-light-grey">
                  <div className="w3-container w3-blue w3-center" width="100%">75%</div>
                </div>
              </div>

              <div className="w3-config con-c2">
                <h4>HTML/CSS</h4>
                <div className="w3-light-grey">
                  <div className="w3-container w3-red w3-center" width="100%">80%</div>
                </div>
              </div>

              <div className="w3-config con-c3">
                <h4>Javascript</h4>
                <div className="w3-light-grey">
                  <div className="w3-container w3-yellow w3-center" width="100%">85%</div>
                </div>
              </div>

              <div className="w3-config con-c4">
                <h4>Node</h4>
                <div className="w3-light-grey">
                  <div className="w3-container w3-green w3-center" width="100%">50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
