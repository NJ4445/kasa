// CollapseDetails.jsx
import React, { useState } from 'react';
import VectorClosed from '../../assets/Vector.png';
import logements from '../../datas/logements.json';
import styles from './CollapseDetails.module.css';

const CollapseDetails = ({ id }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const logement = logements.find(logement => logement.id === id);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div className={styles.collapseDetails}>
      <div className={styles.collapse}>
        <div className={styles.banniereCollapse} onClick={toggleDescription}>
          Description
          <img
            src={VectorClosed}
            alt='icone flèche'
            className={`${styles.img} ${isDescriptionOpen ? styles.expanded : styles.collapsed}`}
          />
        </div>
        {isDescriptionOpen && (
          <div className={`${styles.description} ${styles.descriptionOpen}`}>{logement.description}</div>
        )}
      </div>
      <div className={styles.collapse}>
        <div className={styles.banniereCollapse} onClick={toggleEquipments}>
          Équipements
          <img
            src={VectorClosed}
            alt='icone flèche'
            className={`${styles.img} ${isEquipmentsOpen ? styles.expanded : styles.collapsed}`}
          />
        </div>
        {isEquipmentsOpen && (
          <div className={`${styles.equipements} ${styles.equipementsOpen}`}>
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapseDetails;
