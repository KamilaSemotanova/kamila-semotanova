import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectsReview = () => {
  return (
    <section className="projects-review">
      <h2>Projects</h2>
      <section className="projects-review__box">
        <button className="projects-review__project project1">1</button>
        <button className="projects-review__project project2">2</button>
        <button className="projects-review__project project3">3</button>
        <button className="projects-review__project project4">4</button>
        <button className="projects-review__project project5">5</button>
      </section>
      <Link
        to="/projects"
        className="projects-review__project projects-review__btn"
      >
        Více projektů
      </Link>
    </section>
  );
};
