import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import logements from '../../datas/logements.json';
import styles from '../FicheLogements/FicheLogements.module.css';

function FicheLogements() {
  let { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchedLogement = logements.find((item) => item.id === id);
    setLogement(fetchedLogement);
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Carrousel className={styles.carrousel} logementId={id} />
      <h1 className={styles.title}>{logement.title}</h1>
      <div className={styles.host}>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      <p className={styles.location}>{logement.location}</p>
      <div className={styles.rating}>
        {Array(5).fill(0).map((_, i) => (
          <span key={i}>{i < logement.rating ? '★' : '☆'}</span>
        ))}
      </div>
      <div className={styles.tags}>
        {logement.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default FicheLogements;
