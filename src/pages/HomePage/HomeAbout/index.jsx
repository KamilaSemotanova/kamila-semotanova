import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about__photo"></div>
      <div>
        <div className="home-about__textbox">
          <h2 className="home-about__greeting">Hello,</h2>
          <p className="home-about__text">
            my name is Kamila and I am an Junior Front-End Developer with skills
            of UX/UI designer.
          </p>
        </div>
        <Link to={'/about'} className="home-about__btn">
          More about me
        </Link>
      </div>
    </section>
  );
};
