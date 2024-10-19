// src/pages/PublicTransport/PublicTransport.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PublicTransport.module.css';

const PublicTransport = () => {
  return (
    <div className={styles.publicTransportPage}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Benefits of Using Public Transport</h1>
        <p>Discover how public transportation can significantly improve the quality of life in our cities and for our planet.</p>
        
        <section className={styles.benefitsSection}>
          <div className={styles.benefitBox}>
            <h3 className={styles.benefitTitle}>Reduced Traffic Congestion</h3>
            <p>Public transport helps in decreasing the number of vehicles on the road, reducing traffic jams and commuting time.</p>
            <img src="/path-to-traffic-congestion-image.jpg" alt="Traffic congestion" className={styles.benefitImage} />
          </div>
          <div className={styles.benefitBox}>
            <h3 className={styles.benefitTitle}>Cost Savings</h3>
            <p>Using public transport can save individuals money on fuel, vehicle maintenance, and parking fees.</p>
            <img src="/path-to-public-bus-image.jpg" alt="Public bus" className={styles.benefitImage} />
          </div>
          <div className={styles.benefitBox}>
            <h3 className={styles.benefitTitle}>Environmental Impact</h3>
            <p>Public transport produces fewer emissions per passenger compared to private cars, helping to reduce air pollution and greenhouse gases.</p>
            <img src="/path-to-environmentally-friendly-bus-image.jpg" alt="Environmentally friendly bus" className={styles.benefitImage} />
          </div>
        </section>
        
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>Testimonials</h2>
          <div className={styles.testimonialBox}>
            <img src="/path-to-emma-johnson-image.jpg" alt="Emma Johnson" className={styles.testimonialImage} />
            <p>"Switching to public transport has been a game-changer for me. I save money and enjoy a less stressful commute."</p>
            <p>- Emma Johnson</p>
          </div>
          <div className={styles.testimonialBox}>
            <img src="/path-to-michael-lee-image.jpg" alt="Michael Lee" className={styles.testimonialImage} />
            <p>"Public buses are a great way to get around the city. They are efficient and environmentally friendly."</p>
            <p>- Michael Lee</p>
          </div>
          <div className={styles.testimonialBox}>
            <img src="/path-to-sarah-martinez-image.jpg" alt="Sarah Martinez" className={styles.testimonialImage} />
            <p>"I love how I can relax and read a book while someone else does the driving. Public transport is the way to go!"</p>
            <p>- Sarah Martinez</p>
          </div>
        </section>
        
        <section className={styles.statisticsSection}>
          <h2 className={styles.sectionTitle}>Statistics</h2>
          <div className={styles.statisticBox}>
            <img src="/path-to-bar-chart-image.jpg" alt="Bar chart" className={styles.statisticImage} />
            <p>Reduction in road congestion by 20% with increased public transport use.</p>
          </div>
          <div className={styles.statisticBox}>
            <img src="/path-to-pie-chart-image.jpg" alt="Pie chart" className={styles.statisticImage} />
            <p>Public transport can save up to $2000 per year in commuting costs.</p>
          </div>
          <div className={styles.statisticBox}>
            <img src="/path-to-line-graph-image.jpg" alt="Line graph" className={styles.statisticImage} />
            <p>Public transport reduces CO2 emissions by 33% compared to private cars.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicTransport;