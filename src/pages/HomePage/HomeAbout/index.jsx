import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about__hue">
        <div className="home-about__textbox">
          <h2>Hi, my name is Kamila...</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium in voluptatem, quaerat ex, eum consectetur aperiam
            similique non, corporis recusandae alias modi laudantium sed
            voluptatum maxime vero repudiandae reiciendis ipsa dolorum aliquam
            assumenda ipsam.
          </p>
          <Link to={'/about'}> More about me</Link>
        </div>
      </div>
    </section>
  );
};
