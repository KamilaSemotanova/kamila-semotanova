import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { LoadProjectById } from '../../../functions/db';
import { useParams } from 'react-router-dom';
import { Footer } from '../../../components/Footer';

export const Detail = () => {
  const [project, setProject] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    LoadProjectById(id.toString()).then((project) => {
      setProject(project);
    });
  }, []);

  console.log(project);
  return (
    <section className="detail">
      {project && (
        <>
          <h1>{project.name}</h1>
        </>
      )}
      <Footer />
    </section>
  );
};
