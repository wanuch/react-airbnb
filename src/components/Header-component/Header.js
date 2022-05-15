import React from 'react';
import styles from './Header.module.css';
import airBnb from '../../images/airbnb-logo.png';

const Header = () => (
  <div className={styles.Header}>
    <header>
      <nav className="nav">
        <img className="nav-logo" alt="airbnb-logo" src={airBnb} />
      </nav>
    </header>
  </div>
);

export default Header;
