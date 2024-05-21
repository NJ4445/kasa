// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ logement }) {
  return (
    <div className={styles.card}>
      <Link to={`/FicheLogements/${logement.id}`} className={styles.link}>
        <img src={logement.cover} alt="Logement" />
        <h2 className={styles.title}>{logement.title}</h2>
      </Link>
    </div>
  );
}

export default Card;


