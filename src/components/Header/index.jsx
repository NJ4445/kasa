// Header.jsx
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from '../Header/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('Accueil');
  

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.divLogo} to="/">
        <img className={styles.logo} src={logo} alt='logo' />
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={activeLink === 'Accueil' ? styles.activeLink : ''}
          onClick={() => handleLinkClick('Accueil')}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={activeLink === 'À propos' ? styles.activeLink : ''}
          onClick={() => handleLinkClick('À propos')}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}
