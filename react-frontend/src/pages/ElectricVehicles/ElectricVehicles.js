// src/pages/ElectricVehicles/ElectricVehicles.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './ElectricVehicles.module.css';

const ElectricVehicles = () => {
  return (
    <div className={styles.electricVehiclesPage}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Advantages of Electric Vehicles</h1>
        
        <section className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <img src="/path-to-environmental-benefits-image.jpg" alt="Environmental Benefits" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Environmental Benefits</h2>
              <p>Electric vehicles produce zero tailpipe emissions, reducing air pollution and contributing to a healthier environment. They also help in reducing greenhouse gas emissions when paired with renewable energy sources.</p>
            </div>
          </div>
          
          <div className={styles.advantageCard}>
            <img src="/path-to-cost-efficiency-image.jpg" alt="Cost-Efficiency" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Cost-Efficiency</h2>
              <p>Electric vehicles have lower operating costs compared to traditional gasoline vehicles. They require less maintenance and offer significant savings on fuel, making them a cost-effective choice in the long run.</p>
            </div>
          </div>
          
          <div className={styles.advantageCard}>
            <img src="/path-to-technology-advancements-image.jpg" alt="Technology Advancements" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Technology Advancements</h2>
              <p>Electric vehicles are equipped with cutting-edge technology, including advanced driver-assistance systems, connectivity features, and efficient battery management systems, enhancing the driving experience and safety.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.quizSection}>
          <h2 className={styles.sectionTitle}>Test Your Knowledge on Electric Vehicles</h2>
          <div className={styles.quizQuestion}>
            <p>1. What is the primary benefit of electric vehicles?</p>
            <div className={styles.answerOption}>Reduced fuel costs</div>
            <div className={styles.answerOption}>Lower emissions</div>
            <div className={styles.answerOption}>Enhanced driving experience</div>
          </div>
          <div className={styles.quizQuestion}>
            <p>2. Which component of an electric vehicle typically requires less maintenance?</p>
            <div className={styles.answerOption}>Battery</div>
            <div className={styles.answerOption}>Brakes</div>
            <div className={styles.answerOption}>Engine</div>
          </div>
          <button className={styles.submitQuiz}>Submit Quiz</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ElectricVehicles;