// FicheLogements.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/';
import CollapseDetails from '../../components/CollapseDetails';
import logements from '../../datas/logements.json';
import styles from '../FicheLogements/FicheLogements.module.css';
import redStar from '../../assets/redStar.png';
import greyStar from '../../assets/greyStar.png';

function FicheLogements() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchedLogement = logements.find((item) => item.id === id);
    if (!fetchedLogement) {
      navigate('/error'); // Redirection vers la page d'erreur
    } else {
      setLogement(fetchedLogement);
    }
  }, [id, navigate]);

  if (!logement) {
    return null; // Évite le rendu tant que le logement n'est pas défini ou redirigé
  }

  return (
    <div className={styles.container}>
      <Carrousel className={styles.carrousel} logementId={id} />
      <div className={styles.titleHostContainer}>
        <div className={styles.titleLocation}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.location}>{logement.location}</p>
        </div>
        <div className={styles.host}>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div className={styles.tagsAndRating}>
        <div className={styles.tags}>
          {logement.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.rating}>
          {Array(5).fill(0).map((_, i) => (
            <img 
              key={i} 
              src={i < logement.rating ? redStar : greyStar} 
              alt={i < logement.rating ? 'red star' : 'grey star'} 
              className={styles.star}
            />
          ))}
        </div>
      </div>
      <CollapseDetails id={id} />
    </div>
  );
}

export default FicheLogements;
