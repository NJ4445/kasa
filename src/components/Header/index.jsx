// Header.jsx
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from '../Header/Header.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set the active link based on the current path
    if (location.pathname === '/') {
      setActiveLink('Accueil');
    } else if (location.pathname === '/about') {
      setActiveLink('À propos');
    }
  }, [location.pathname]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.divLogo} to="/">
        <img className={styles.logo} src={logo} alt="logo" />
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