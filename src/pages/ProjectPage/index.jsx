import React, { useState, useEffect } from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { LoadProjects } from '../../functions/db';
import { Link } from 'react-router-dom';

export const ProjectPage = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    LoadProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <section className="project-page">
      <h1 className="project-page__title">Projects</h1>
      {projects && (
        <div className='project-page__container'>
          {projects.map((project, index) => {
            return (
              <div className="project-page__box" key={project.id}>
                <p className='project-page__index'>{project.id}</p>
                <div>
                  <Link
                    to={`/projects/${project.id}`}
                    key={project.id}
                    className="project-page__name"
                  >
                    {project.name}
                  </Link>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </section>
  );
};
