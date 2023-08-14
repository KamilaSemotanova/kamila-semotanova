import React from 'react';
import './style.css';
import { Form } from './Form';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <Form />
      <div className="contact__box">
        <p>E-mail: kamila.semotanova@gmail.com</p>
        <p>LinkedIn:</p>
        <p>GitHub:</p>
        <p>Figma:</p>
      </div>
    </section>
  );
};
