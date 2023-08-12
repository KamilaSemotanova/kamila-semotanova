import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectsReview = () => {
  return (
    <section className="projects-review">
      <h2 className="projects-review__title">Projects</h2>
      <section className="projects-review__box">
        <button className="projects-review__project project1">
          <span className="material-symbols-outlined">celebration</span>
        </button>
        <button className="projects-review__project project2">2</button>
        <button className="projects-review__project project3">3</button>
      </section>
      <Link to="/projects" className="projects-review__btn">
        All projects
      </Link>
    </section>
  );
};
