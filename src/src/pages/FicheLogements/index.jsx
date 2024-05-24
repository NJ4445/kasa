import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/';
import CollapseDetails from '../../components/CollapseDetails';
import logements from '../../datas/logements.json';
import styles from '../FicheLogements/FicheLogements.module.css';
import redStar from '../../assets/redStar.png';
import greyStar from '../../assets/greyStar.png';

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
              src={i < 3 ? redStar : greyStar} 
              alt={i < 3 ? 'red star' : 'grey star'} 
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
