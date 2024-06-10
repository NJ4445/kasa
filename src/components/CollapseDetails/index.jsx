// CollapseDetails.jsx
import React from 'react';
import Collapse from '../../components/Collapse';
import logements from '../../datas/logements.json';
import styles from './CollapseDetails.module.css';

const CollapseDetails = ({ id }) => {
  const logement = logements.find(logement => logement.id === id);

  return (
    <div className={styles.collapseDetails}>
      <div className={styles.banniere}>
        <Collapse 
          titre={<p className={styles.titreCollapse}>Description</p>} 
          description={<p className={styles.description}>{logement.description}</p>} 
        />
      </div>
      <div className={styles.banniere}>
        <Collapse 
          titre={<p className={styles.titreCollapse}>Équipements</p>} 
          description={
            <ul className={styles.equipements}>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  );
};

export default CollapseDetails;
