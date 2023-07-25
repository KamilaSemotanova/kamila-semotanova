import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

export const Form = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_hp8mgnj',
        'template_3jw2v0e',
        form.current,
        'FpFzpra9TKP69qNoQ',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div>
        <label className="form__label">Name</label>
        <input type="text" name="user_name" className='form__input' />
      </div>
      <div>
        <label className="form__label">E-mail</label>
        <input type="email" name="user_email" className='form__input' />
      </div>
      <div>
        <label className="form__label">Message</label>
        <textarea name="message"  className='form__message'/>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
