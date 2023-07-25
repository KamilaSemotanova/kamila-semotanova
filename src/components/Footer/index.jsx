import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <section className="footer">
      <p>© Kamila Semotánová</p>
      <div className="footer__logobox">
        <a href="https://github.com/KamilaSemotanova">
          <img
            src={require('./img/github.svg')}
            alt="github"
            className="footer__logo-github"
          />
        </a>
        <a href="https://www.linkedin.com/in/kamila-semotánová-59a57a1b8/">
          <img
            src={require('./img/linkedin.svg')}
            alt="linkedin"
            className="footer__logo-linkedin"
          />
        </a>
      </div>
    </section>
  );
};
