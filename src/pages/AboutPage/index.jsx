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
            My name is Kamila Semotánová and I was born and reised in Prague,
            Czech Republic. Over all I am not really a fan of classic sports
            with ball. Through out the time I found my way to sports: in summer
            I love to ride a bycicle and in winter is my passion to snowboard.
          </p>
          <p className="about-page__text">
            My working history is mainly landed in gastro industry, where i
            mastered my skills in comunication, work in team and problem solving
            skills. Covid got me looking for different direction than before and
            I found myself trying many different positions which included
            managing covid lab and planting trees. I landed my self position in
            small startup where i learned more about development and also got in
            charge of creating HTML e-mails.
          </p>
          <p className="about-page__text">
            My passion for IT lays in my obsesion to solve problem layed infront
            of me.
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
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
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
