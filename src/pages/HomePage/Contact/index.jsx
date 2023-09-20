import React from 'react';
import './style.css';
import { Form } from './Form';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <Form />
      <div className="contact__box">
        <div>
          {' '}
          <img
            src={require('./img/mail.png')}
            alt="email"
            className="contact__icon"
          />
          <p>kamila.semotanova@gmail.com</p>
        </div>
        <div>
          <img
            src={require('./img/social-linkedin.png')}
            alt="linkedin"
            className="contact__icon"
          />
          <a href="https://www.linkedin.com/in/kamila-semotánová/">LinkedIn</a>
        </div>
        <div>
          <img
            src={require('./img/social-github.png')}
            alt="github"
            className="contact__icon"
          />
          <a href="https://github.com/KamilaSemotanova">GitHub</a>
        </div>
        <div>
          <img
            src={require('./img/social-figma-1.png')}
            alt="figma"
            className="contact__icon"
          />
          <a href="https://www.figma.com/files/drafts?fuid=1222931808663192972">
            Figma
          </a>
        </div>
      </div>
    </section>
  );
};
