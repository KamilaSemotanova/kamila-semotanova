import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__box">
        <p className="error__title">404</p>
        <div className="error__container">
          <p className="error__text">page not found.</p>
          <Link to={'/'} className="error__btn">
            home
          </Link>
        </div>
      </div>
    </section>
  );
};
