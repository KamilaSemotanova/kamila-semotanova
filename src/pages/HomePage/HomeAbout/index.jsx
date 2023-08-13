import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about__photo"></div>
      <div className="home-about__textbox">
        <h2 className="home-about__greeting">Hello,</h2>
        <p>
          I am an enthusiastic Junior Front-End Developer with a blend of skills
          that extend seamlessly into the realm of UX/UI. My meticulous
          attention to detail, coupled with an insatiable eagerness to learn,
          sets me apart in my pursuit of excellence.
        </p>
      </div>
      <Link to={'/about'} className="home-about__btn">
        More about me
      </Link>
    </section>
  );
};
