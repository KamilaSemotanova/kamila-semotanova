import React, { useState, useEffect } from 'react';
import './style.css';
import { LoadProjectById } from '../../../functions/db';
import { Link } from 'react-router-dom';

export const ProjectsReview = () => {
  const [project1, setProject1] = useState();
  const [project2, setProject2] = useState();
  const [project3, setProject3] = useState();
  const id1 = 1;
  const id2 = 2;
  const id3 = 3;

  useEffect(() => {
    LoadProjectById(id1.toString()).then((project) => {
      setProject1(project);
    });
  }, []);

  useEffect(() => {
    LoadProjectById(id2.toString()).then((project) => {
      setProject2(project);
    });
  }, []);

  useEffect(() => {
    LoadProjectById(id3.toString()).then((project) => {
      setProject3(project);
    });
  }, []);

  return (
    <section className="projects-review">
      <h2 className="projects-review__title">Projects</h2>
      <section className="projects-review__box">
        {project3 && (
          <>
            <Link
              to={`/projects/${project3.id}`}
              className="projects-review__project project1"
            >
              <div className="projects-review__project-box">
                <span class="material-symbols-outlined">menu_book</span>
                <div className="project-review__name">{project3.name}</div>
              </div>
            </Link>
          </>
        )}
        {project2 && (
          <>
            <Link
              to={`/projects/${project2.id}`}
              className="projects-review__project project2"
            >
              <div className="projects-review__project-box">
                <span class="material-symbols-outlined">liquor</span>
                <div className="project-review__name">{project2.name}</div>
              </div>
            </Link>
          </>
        )}
        {project1 && (
          <>
            <Link
              to={`/projects/${project1.id}`}
              className="projects-review__project project3"
            >
              <div className="projects-review__project-box">
                <span class="material-symbols-outlined">science</span>
                <div className="project-review__name">{project1.name}</div>
              </div>
            </Link>
          </>
        )}
      </section>
      <Link to="/projects" className="projects-review__btn">
        All projects
      </Link>
    </section>
  );
};
