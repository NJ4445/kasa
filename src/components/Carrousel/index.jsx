import React, { useState, useEffect } from 'react';
import leftArrow from '../../assets/leftVector.png';
import rightArrow from '../../assets/rightVector.png';
import logements from '../../datas/logements.json';
import styles from '../Carrousel/Carrousel.module.css';

const Carrousel = ({ logementId }) => {
  const logement = logements.find(logement => logement.id === logementId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideText, setSlideText] = useState('');

  useEffect(() => {
    if (logement && logement.pictures) {
      setCurrentIndex(0); // Réinitialiser l'index lorsque les images changent
    }
  }, [logement]);

  useEffect(() => {
    const updateSlideNumber = () => {
      const slideNumber = currentIndex + 1;
      setSlideText(`${slideNumber}/${logement.pictures.length}`);
    };

    if (logement && logement.pictures) {
      updateSlideNumber();
    }
  }, [currentIndex, logement]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!logement || !logement.pictures || logement.pictures.length === 0) {
    return <div className={styles.carrousel}>No images available</div>;
  }

  return (
    <div className={styles.carrousel}>
      <img
        src={logement.pictures[currentIndex]}
        alt={`${logement.title} ${slideText}`}
        className={styles['carrousel-image']}
      />
      {logement.pictures.length > 1 && (
        <>
          <button
            onClick={handlePrevClick}
            className={`${styles['carrousel-button']} ${styles.prev}`}
            aria-label="Previous image"
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          <button
            onClick={handleNextClick}
            className={`${styles['carrousel-button']} ${styles.next}`}
            aria-label="Next image"
          >
            <img src={rightArrow} alt="Next" />
          </button>
        </>
      )}
      {logement.pictures.length > 1 && (
        <div className={styles['slide-number']}>
          {slideText}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
