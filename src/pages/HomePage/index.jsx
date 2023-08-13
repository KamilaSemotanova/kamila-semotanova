import React from 'react';
import './style.css';
import { ProjectsReview } from './ProjectsReview';
import { HomeAbout } from './HomeAbout';
import { Contact } from './Contact';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <>
      <main className="homepage">
        <div className="hopmepage__container">
          <HomeAbout />
          <ProjectsReview />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};
