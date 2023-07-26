import React, { useState } from 'react';
import { Menu } from './Burgermenu';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!menuOpen) {
      window.addEventListener('click', () => setMenuOpen(false), {
        once: true,
      });
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="header__title">Kamila Semotánová</h1>
      <nav className="header__navigation">
        <ul className="header__menu--pc">
          <li>
            <Link to={'/'} className="menu__box-item">
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'} className="menu__box-item">
              About
            </Link>
          </li>
          <li>
            <Link to={'/projects'} className="menu__box-item">
              Projects
            </Link>
          </li>
          <li>
            <Link to={'/contact'} className="menu__box-item">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__menu--phone">
        <button className="header__menu-btn" onClick={handleMenuToggle}>
          {menuOpen ? (
            <img
              className="header__menu-item"
              src={require('./img/burgermenu-opened.svg')}
              alt="menu-opened"
            />
          ) : (
            <img
              className="header__menu-item"
              src={require('./img/burgermenu-closed.svg')}
              alt="menu-closed"
            />
          )}
        </button>
        {menuOpen && <Menu />}
      </div>
    </header>
  );
};
