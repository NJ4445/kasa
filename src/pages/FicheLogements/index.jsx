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
    </div>
  );
}

export default FicheLogements;
