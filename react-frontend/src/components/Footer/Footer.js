// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h5>About EcoTransit</h5>
            <p>EcoTransit promotes sustainable transportation and eco-friendly practices in urban mobility.</p>
          </div>
          <div className={styles.col}>
            <h5>Quick Links</h5>
            <ul className={styles.quickLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/carbon-footprint">Carbon Footprint Data</Link></li>
              <li><Link to="/public-transport">Public Transport Benefits</Link></li>
              <li><Link to="/electric-vehicles">Electric Vehicles</Link></li>
              <li><Link to="/sustainable-practices">Sustainable Practices</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h5>Contact Us</h5>
            <p>123 Eco Street, Green City, 12345</p>
            <p>(123) 456-7890</p>
            <p>info@ecotransit.com</p>
          </div>
        </div>
        <hr />
        <div className={styles.row}>
          <p>&copy; 2023 EcoTransit. All rights reserved.</p>
          <Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
          <Link to="/contact" className={styles.footerLink}>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
