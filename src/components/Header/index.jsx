import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from '../Header/Header.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link className={styles.divLogo} to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={location.pathname === '/' ? styles.activeLink : ''}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? styles.activeLink : ''}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}
