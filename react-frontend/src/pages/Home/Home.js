// src/pages/Home/Home.js
import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.imageSlider}>
          {/* Add image slider component here */}
        </section>
        <div className={styles.twoColumnLayout}>
          <section className={styles.ecoRouting}>
            <h2>Eco-Routing Maps</h2>
            <div className={styles.infoCard}>
              <img src="/path-to-eco-routing-map.jpg" alt="Eco-routing map" className={styles.cardImage} />
              <p>Discover the most eco-friendly routes to minimize your carbon footprint while traveling.</p>
            </div>
          </section>
          <section className={styles.sustainableTransport}>
            <h2>Sustainable Transport Options</h2>
            <div className={styles.infoCard}>
              <div className={styles.imageGrid}>
                <img src="/path-to-electric-bicycles.jpg" alt="Electric bicycles" className={styles.gridImage} />
                <img src="/path-to-zero-emission-buses.jpg" alt="Zero-emission buses" className={styles.gridImage} />
                <img src="/path-to-solar-powered-car-charging.jpg" alt="Solar-powered car charging stations" className={styles.gridImage} />
              </div>
              <p>Explore various sustainable transport options such as electric bicycles, zero-emission buses, and solar-powered car charging stations.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;