import React from 'react';
import styles from './About.module.css';
import imageBannerAbout from '../../assets/banner_about.jpg';
import Collapse from "../../components/Collapse";

export default function About() {
  return (
    <section className={styles.About}>
      <div className={styles.banner}>
        <img src={imageBannerAbout} alt='banner_about.' className={styles.imgBannerAbout} />
      </div>
      <div className={styles.valeurs}>
        <Collapse 
          titre={<p className={styles.titreCollapse}>Fiabilité</p>}
          description={<p className={styles.description}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
        />
        <Collapse 
          titre={<p className={styles.titreCollapse}>Respect</p>}
          description={<p className={styles.description}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse 
          titre={<p className={styles.titreCollapse}>Service</p>}
          description={<p className={styles.description}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
        />
        <Collapse 
          titre={<p className={styles.titreCollapse}>Sécurité</p>}
          description={<p className={styles.description}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />
      </div>
    </section>
  );
}



