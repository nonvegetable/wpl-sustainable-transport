// src/pages/CarbonFootprint/CarbonFootprint.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './CarbonFootprint.module.css';

const CarbonFootprint = () => {
  return (
    <div className={styles.carbonFootprintPage}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Carbon Footprint Data by Vehicle Type</h1>
        <p>Understand the impact of different vehicles on carbon emissions and explore ways to reduce your carbon footprint.</p>
        
        <section className={styles.chartsSection}>
          <div className={styles.chartRow}>
            <div className={styles.chartBox}>
              <div className={styles.chartPlaceholder}>Bar Chart Placeholder</div>
            </div>
            <div className={styles.chartBox}>
              <div className={styles.chartPlaceholder}>Line Chart Placeholder</div>
            </div>
          </div>
          <div className={styles.chartRow}>
            <div className={styles.chartBox}>
              <div className={styles.chartPlaceholder}>Pie Chart Placeholder</div>
            </div>
            <div className={styles.chartBox}>
              <div className={styles.chartPlaceholder}>Scatter Plot Placeholder</div>
            </div>
          </div>
        </section>
        
        <section className={styles.comparisonsSection}>
          <h2 className={styles.sectionTitle}>Comparisons</h2>
          <div className={styles.comparisonCards}>
            <div className={styles.comparisonCard}>
              <h3 className={styles.cardTitle}>Car</h3>
              <p>Average emission: 4.6 metric tons CO2/year</p>
            </div>
            <div className={styles.comparisonCard}>
              <h3 className={styles.cardTitle}>Bus</h3>
              <p>Average emission: 1.2 metric tons CO2/year</p>
            </div>
            <div className={styles.comparisonCard}>
              <h3 className={styles.cardTitle}>Bicycle</h3>
              <p>Average emission: 0 metric tons CO2/year</p>
            </div>
          </div>
        </section>
        
        <section className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>Tips to Reduce Carbon Footprint</h2>
          <div className={styles.tipsCards}>
            <div className={styles.tipCard}>
              <h3 className={styles.cardTitle}>Use Public Transport</h3>
              <p>Public transportation significantly reduces the number of vehicles on the road, leading to fewer emissions per capita.</p>
            </div>
            <div className={styles.tipCard}>
              <h3 className={styles.cardTitle}>Carpool</h3>
              <p>Sharing a ride with others reduces the number of cars on the road, thereby cutting down on total emissions.</p>
            </div>
            <div className={styles.tipCard}>
              <h3 className={styles.cardTitle}>Cycle or Walk</h3>
              <p>Cycling or walking is a zero-emission mode of transportation that also promotes a healthy lifestyle.</p>
            </div>
            <div className={styles.tipCard}>
              <h3 className={styles.cardTitle}>Maintain Your Vehicle</h3>
              <p>Regular maintenance ensures your vehicle runs efficiently, reducing its carbon footprint.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CarbonFootprint;