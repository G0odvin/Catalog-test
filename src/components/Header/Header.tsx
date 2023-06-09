import React from 'react';
// styles & images
import LogoIcon from '../../images/logo.svg';
import FavoritesIcon from '../../images/Icons/Favourites (Heart Like).svg';
import CardIcon from '../../images/Icons/Shopping bag (Cart).svg';
import '../../styles/header.scss';
import { Link, useLocation } from 'react-router-dom';
import { CartPage } from '../../pages/CartPage';
import { Search } from '../Search/Search';
import classNames from 'classnames';


export const Header = () => {
  const location = useLocation();
  const searchCondition = location.pathname.includes('phones');
  const homeLocation = location.pathname.includes('home');
  const phonesLocation = location.pathname.includes('phones');

  return (
    <header className="header">
      <div className='nav-block'>
        <Link to='/home'>
          <div className="logo">
            <img src={LogoIcon} alt="Logo" className="logoImage" />
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav__bar">
            <li className="nav__item">
              <Link to='/home'>
                <p className={classNames(
                  'nav__link',
                  {'is-active': homeLocation}
                )}>HOME</p>
              </Link>

            </li>
            <li className="nav__item">
              <Link to='/phones'>
                <p className={classNames(
                  'nav__link',
                  {'is-active': phonesLocation}
                )}>PHONES</p>
              </Link>

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
        {searchCondition && (
          <Search placeholder={'Search in phones...'}/>
        )}

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
