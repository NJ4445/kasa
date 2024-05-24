// Home.jsx
import React from 'react';
import styles from './Home.module.css';
import Banner from '../../components/Banner/';
import Card from '../../components/Card/';
import logementsData from '../../datas/logements.json';

function Home() {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
      <div className={styles.cardContainer}>
        {logementsData.map(logement => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
