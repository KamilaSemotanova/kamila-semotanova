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
        <div className="about-page__container">
          <div className="about-page__title-box first-box">
            <div className="about-page__photo first">
              <h3 className="about-page__title">Who am I?</h3>
            </div>
          </div>
          <div className="about-page__section">
            <p>
              My name is Kamila Semotánová and I was born and reised in Prague,
              Czech Republic. Over all I am not really a fan of classic sports
              with ball. Through out the time I found my way to sports: in
              summer I love to ride a bycicle and in winter is my passion to
              snowboard.
            </p>
          </div>
        </div>
        <div className="about-page__container">
          <div className="about-page__title-box second-box">
            <div className="about-page__photo second">
              <h3 className="about-page__title">My work expierence so far?</h3>
            </div>
          </div>
          <div className="about-page__section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              architecto voluptas commodi voluptates quia ex est corporis sed.
              Aperiam dignissimos sed corporis possimus ipsum facere assumenda
              expedita neque exercitationem eos voluptatem quod laborum maxime
              qui quis, veniam atque consectetur? Ducimus rerum nemo, eius ex
              ipsa eaque delectus ab velit accusantium quibusdam veniam numquam
              tempora eligendi? Modi ratione ipsa dolorum deserunt rem
              consectetur sed alias recusandae! Veniam animi ad omnis qui
              provident quasi cumque quam earum, ratione deleniti ducimus ipsa
              vel at distinctio modi accusantium blanditiis saepe sit? Impedit
              eum repellat hic provident ullam dolore consequatur ipsam,
              inventore, magnam temporibus sunt.
            </p>
          </div>
        </div>
        <div className="about-page__container">
          <div className="about-page__title-box third-box">
            <div className="about-page__photo third">
              <h3 className="about-page__title">
                Where did passion for IT came from?
              </h3>
            </div>
          </div>
          <div className="about-page__section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              architecto voluptas commodi voluptates quia ex est corporis sed.
              Aperiam dignissimos sed corporis possimus ipsum facere assumenda
              expedita neque exercitationem eos voluptatem quod laborum maxime
              qui quis, veniam atque consectetur? Ducimus rerum nemo, eius ex
              ipsa eaque delectus ab velit accusantium quibusdam veniam numquam
              tempora eligendi? Modi ratione ipsa dolorum deserunt rem
              consectetur sed alias recusandae! Veniam animi ad omnis qui
              provident quasi cumque quam earum, ratione deleniti ducimus ipsa
              vel at distinctio modi accusantium blanditiis saepe sit? Impedit
              eum repellat hic provident ullam dolore consequatur ipsam,
              inventore, magnam temporibus sunt.
            </p>
          </div>
        </div>
        <div className="about-page__container">
          <div className="about-page__title-box fourth-box">
            <div className="about-page__photo fourth">
              <h3 className="about-page__title">What are my skills?</h3>
            </div>
          </div>
          <div className="about-page__section">
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
        <div className="about-page__container">
          <div className="about-page__title-box fifth-box">
            <div className="about-page__photo fifth">
              <h3 className="about-page__title">
                What did I already achieved?
              </h3>
            </div>
          </div>
          <div className="about-page__section">
            <p>
              After finishing my courses I dive myself into offering my skills
              to other people that need to create websites. I was very lucky to
              begin colaboration with BoomEvents that offered me to convey
              projets of their clients. With that in stock I also started to
              putting the word out and getting more projects by myself.{' '}
            </p>
            <p>You can browse through all projects here:</p>
            <Link to={'../projects'} className="about-page__link">
              Projects
            </Link>
          </div>
        </div>
        <div className="about-page__container">
          <div className="about-page__title-box sixth-box">
            <div className="about-page__photo sixth">
              <h3 className="about-page__title">
                Would you like to get in touch with?
              </h3>
            </div>
          </div>
          <div className="about-page__section">
            <p>
              Write me a message whether you would like me to create you a
              website or just to get in touch.
            </p>
            <HashLink to={'../#contact'} className="about-page__link">
              Contact
            </HashLink>
          </div>
        </div>
        <button className="about-page__btn" onClick={handleDownload}>
          Download CV
        </button>
      </div>
      <Footer />
    </section>
  );
};
