import React from 'react';

import SwiperProjects from '../components/SwiperProjects';

import '../styles/Portfolio.css';

function Portfolio() {
  return(
    <section className="section-portfolio" id="portfolio">
      <div className="container-portfolio">
        <div className="projects-filter">
          <p>All</p>
          <p>Trybe</p>
          <p>My projects</p>
        </div>
        <div className="project-card">
          <SwiperProjects />
        </div>
        <div className="project-description">
          <p>
            Here are some projects of mine made during my studies at Trybe and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
