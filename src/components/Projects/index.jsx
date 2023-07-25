import React from 'react';
import './style.css';

export const Projects = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <div className="portfolio__content">
        <a>
          <img alt="projekt1" />
        </a>
        <a>
          <img alt="projekt2"/>
        </a>
        <a>
          <img alt="projekt3"/>
        </a>
        <a>
          <img alt="projekt4"/>
        </a>
      </div>
    </section>
  );
};
