import React, { useState } from 'react';
import { Menu } from './Burgermenu';
import './style.css';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to={'/'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending menu__box-item'
                  : isActive
                  ? 'active menu__box-item'
                  : 'menu__box-item'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/about'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending menu__box-item'
                  : isActive
                  ? 'active menu__box-item'
                  : 'menu__box-item'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/projects'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending menu__box-item'
                  : isActive
                  ? 'active menu__box-item'
                  : 'menu__box-item'
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/contact'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending menu__box-item'
                  : isActive
                  ? 'active menu__box-item'
                  : 'menu__box-item'
              }
            >
              Contact
            </NavLink>
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
