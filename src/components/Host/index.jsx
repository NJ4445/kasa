// Host.jsx
import React from 'react';
import styles from './host.module.css';

const Host = ({ name, picture }) => {
  return (
    <div className={styles.host}>
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
};

export default Host;