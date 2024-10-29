import React from 'react';
// import Footer from '../../components/Footer/Footer.js';
import styles from './Home.module.css';
// import Header from '../../components/Header/Header.js';

const Home = () => {
    return (
        <div className={styles.homePage}>
            {/* <Header /> */}
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <div className={styles.heroText}>
                        <h1>Eco-Friendly Travel Starts Here</h1>
                        <p>Discover sustainable transport options and eco-routing maps to reduce your carbon footprint.</p>
                    </div>
                </section>
                <section className={styles.twoColumnLayout}>
                    <div className={styles.infoSection}>
                        <h2>Eco-Routing Maps</h2>
                        <p>Plan the most eco-friendly routes to minimize your impact on the environment.</p>
                        <img src="" alt="Eco-routing map" className={styles.image} />
                    </div>
                    <div className={styles.infoSection}>
                        <h2>Sustainable Transport Options</h2>
                        <p>Explore options like electric bicycles, zero-emission buses, and solar-powered car charging.</p>
                        <div className={styles.imageGrid}>
                            <img src="/IMG-20240912-WA0032.jpg" alt="Electric bicycles" className={styles.gridImage} />
                            <img src="/IMG-20240912-WA0031.jpg" alt="Zero-emission buses" className={styles.gridImage} />
                            <img src="/IMG-20240912-WA0035.jpg" alt="Solar-powered car charging" className={styles.gridImage} />
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
