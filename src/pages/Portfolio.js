import React from 'react';

import '../styles/Portfolio.css';

function Portfolio() {
  return(
    <section className="section-portfolio">
      <div className="container-portfolio">
        <div>
          <p>All</p>
          <p>Trybe</p>
          <p>My projects</p>
        </div>
        <div>
          <h3>Projetos</h3>
        </div>
        <div>
          <p>
            Here are some projects of mine made during my studies at Trybe and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
