import React from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const AboutPage = () => {
  const handleDownload = (event) => {
    event.preventDefault;
    console.log('download');
  };
  return (
    <section className="about-page">
      <div className="about-page__box">
        <div className="about-page__photo first"></div>
        <div className="about-page__container">
          <p className="about-page__text">
            I'm Kamila Semotánová, born and raised in Prague, Czech Republic.
            Growing up, I struggled with finding my purpose and sense of
            direction in life. I tried many different things throughout my life,
            both as hobbies and in my professional pursuits. If it weren't for
            these experiences, I wouldn't have been able to find passion in
            snowboarding, biking, and most importantly, in coding and
            programming.
          </p>
          <p className="about-page__text">
            My working history is mainly landed in gastro industry, where i
            mastered my skills in comunication, team work and problem solving
            skills. Covid got me looking for different direction than before and
            I found myself trying many different positions which included
            managing covid lab and planting trees. After a while I landed my
            self position in small startup where i learned more about
            development and also got in charge of creating HTML e-mails for
            clients.
          </p>
          <p className="about-page__text">
            My passion for IT began during my studies at UCT in Prague. One of
            our subjects was analytics, which included a practical component
            involving some basic coding in R. That was the first time I realized
            that I actually enjoy sitting down and creating code for longer than
            necessary. Throughout the COVID-19 pandemic, I attempted to learn
            programming on my own using the Mimo app. However, I quickly
            realized that I needed some mentoring. This is when Czechitas and
            their Digital Academy: Web came into play. It provided me with the
            start I needed for my new career direction.
          </p>
        </div>
        <div className="about-page__photo second"></div>
        <div className="about-page__container">
          <p className="about-page__text">
            After finishing my courses I dive myself into offering my skills to
            other people that need to create websites. I was very lucky to begin
            colaboration with BoomEvents that offered me to convey projets of
            their clients. With that in stock I also started to putting the word
            out and getting more projects by myself.
          </p>
          <Link to={'../projects'} className="about-page__btn">
            see all projects
          </Link>
          <button className="about-page__btn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
        <div className="about-page__container">
          <h2>Skills</h2>
          <div>
            <h3>hard</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>JavaScript - ReactJS</li>
            </ul>
            <h3>soft</h3>
            <ul>
              <li>Communication</li>
              <li>Team work</li>
              <li>Problem solving</li>
            </ul>
          </div>
        </div>
        <div className="about-page__photo third"></div>
        <div className="about-page__container">
          <p className="about-page__text">
            Write me a message whether you would like me to create you a website
            or just to get in touch.
          </p>
          <HashLink to={'../#contact'} className="about-page__btn">
            Contact me
          </HashLink>
        </div>
      </div>
      <Footer />
    </section>
  );
};
