import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { LoadProjectById } from '../../../functions/db';
import { useParams } from 'react-router-dom';
import { Footer } from '../../../components/Footer';
import { Link } from 'react-router-dom';

export const Detail = () => {
  const [project, setProject] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    LoadProjectById(id.toString()).then((project) => {
      setProject(project);
    });
  }, []);

  return (
    <section className="detail">
      {project && (
        <>
          <h1>{project.name}</h1>
          <a href={project.link}>{project.link}</a>
          <div>
            <div>
              {project.progress !== 'done' ? (
                <>
                  <p>Progress: {project.progress}</p>
                  <p>To do: {project.todo}</p>
                </>
              ) : (
                <p>This project is {project.progress}</p>
              )}
            </div>
            <p>{project.about}</p>
            <p>{project.proposal}</p>
          </div>
          <div>{project.photo}</div>
          <div>{project.video}</div>
          <Link to={'/projects'}>Back to projects</Link>
        </>
      )}
      <Footer />
    </section>
  );
};
