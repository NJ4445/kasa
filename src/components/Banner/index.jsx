// Banner.js
import React from 'react';
import imageBanner from '../../assets/banner4.jpg'; 
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={imageBanner} alt='banner' className={styles.bannerImage} />
      <h1 className={styles.bannerTitle}>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
