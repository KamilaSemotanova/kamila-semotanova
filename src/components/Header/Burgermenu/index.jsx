import React from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu__box">
      <ul>
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
      </ul>
    </nav>
  );
};
