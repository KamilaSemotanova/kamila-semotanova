import React from 'react';
import './style.css';
import { ProjectsReview } from './ProjectsReview';

export const HomePage = () => {
  return (
    <>
      <main className="homepage">
        <div className="hopmepage__projects">
          <ProjectsReview />
        </div>
      </main>
    </>
  );
};
