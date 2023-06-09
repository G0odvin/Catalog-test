import React from 'react';
// styles & images
import LogoIcon from '../../images/logo.svg';
import FavoritesIcon from '../../images/Icons/Favourites (Heart Like).svg';
import CardIcon from '../../images/Icons/Shopping bag (Cart).svg';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import { CartPage } from '../../pages/CartPage';

export const Header = () => {
  return (
    <header className="header">
      <div className='nav-block'>
        <Link to='/'>
          <div className="logo">
            <img src={LogoIcon} alt="Logo" className="logoImage" />
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav__bar">
            <li className="nav__item">
              <a href="/" className="is-active nav__link">HOME</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">PHONES</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">TABLETS</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">ACCESSORIES</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header__icons'>
        <div className='header__iconsBlock'>
          <div className="header__iconsFavorites">
            <img src={FavoritesIcon} alt="Favorites Image" className="header__iconsFavoritesImage" />
          </div>
        </div>

        <div className='header__iconsBlock'>
          <Link to='/cart'>
          <div className="header__iconsCard">
            <img src={CardIcon} alt="Card Image" className="header__iconsCardImage" />
          </div>
          </Link>

        </div>
      </div>
    </header>
  );
};
