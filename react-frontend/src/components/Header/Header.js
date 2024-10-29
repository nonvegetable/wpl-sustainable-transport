// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.navbarBrand}>EcoTransit</Link>
        <button className={styles.navbarToggler} type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className={styles.navList}>
          <ul>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/carbon-footprint" className={styles.navLink}>Carbon Footprint Data</Link></li>
            <li><Link to="/public-transport" className={styles.navLink}>Public Transport Benefits</Link></li>
            <li><Link to="/electric-vehicles" className={styles.navLink}>Electric Vehicles</Link></li>
            <li><Link to="/sustainable-practices" className={styles.navLink}>Sustainable Practices</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
