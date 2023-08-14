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
        <div>
          {projects.map((project, index) => {
            return (
              <div className="project-page__box" key={project.id}>
                {/* <img src={require(`${project.logo}`)} alt="" /> */}
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="project-page__name"
                >
                  {project.name}
                </Link>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </section>
  );
};
