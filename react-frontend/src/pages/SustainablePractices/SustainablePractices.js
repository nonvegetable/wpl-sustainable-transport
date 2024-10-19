// src/pages/SustainablePractices/SustainablePractices.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './SustainablePractices.module.css';

const CityExample = ({ image, title, description }) => (
  <div className={styles.cityBox}>
    <img src={image} alt={title} className={styles.cityImage} />
    <div className={styles.cityInfo}>
      <h2 className={styles.cityTitle}>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const SustainablePractices = () => {
  const cityExamples = [
    {
      image: '/path-to-amsterdam-image.jpg',
      title: "Amsterdam's Bike-Sharing Program",
      description: "Amsterdam has implemented an extensive bike-sharing program that encourages residents and tourists to use bicycles instead of cars. This initiative has significantly reduced traffic congestion and carbon emissions."
    },
    {
      image: '/path-to-shenzhen-image.jpg',
      title: "Shenzhen's Electric Bus Fleet",
      description: "Shenzhen has transformed its public transportation system by replacing traditional buses with electric buses. This has led to a considerable decrease in air pollution and a cleaner urban environment."
    },
    {
      image: '/path-to-melbourne-image.jpg',
      title: "Melbourne's Green Tram Network",
      description: "Melbourne has invested in a green tram network powered by renewable energy. This sustainable transport option provides an efficient and eco-friendly way for residents to commute."
    },
    {
      image: '/path-to-paris-image.jpg',
      title: "Paris' Electric Scooter Initiative",
      description: "Paris has introduced electric scooters as a convenient and eco-friendly mode of transport. Charging stations are strategically placed around the city, making it easy for users to charge their scooters and reduce their carbon footprint."
    },
    {
      image: '/path-to-copenhagen-image.jpg',
      title: "Copenhagen's Pedestrian-Friendly Streets",
      description: "Copenhagen has redesigned its streets to be more pedestrian-friendly, with wider walkways, green spaces, and reduced vehicle access. This promotes walking and reduces reliance on automobiles."
    },
    {
      image: '/path-to-vancouver-image.jpg',
      title: "Vancouver's Urban Green Spaces",
      description: "Vancouver has created numerous urban green spaces that encourage outdoor activities and reduce the heat island effect. These parks and green areas provide a natural respite in the urban environment."
    }
  ];

  return (
    <div className={styles.sustainablePracticesPage}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Innovative Sustainable Practices in Cities Worldwide</h1>
        <p>Explore various case studies of cities around the world that have successfully implemented sustainable practices to promote eco-friendly transportation.</p>
        <div className={styles.cityExamples}>
          {cityExamples.map((city, index) => (
            <CityExample key={index} {...city} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SustainablePractices;