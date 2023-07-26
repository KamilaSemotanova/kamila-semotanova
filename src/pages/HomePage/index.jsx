import React from 'react';
import './style.css';
import { ProjectsReview } from './ProjectsReview';
import { HomeAbout } from './HomeAbout';

export const HomePage = () => {
  return (
    <>
      <main className="homepage">
        <div className="hopmepage__container">
          <HomeAbout />
          <ProjectsReview />
        </div>
      </main>
    </>
  );
};
