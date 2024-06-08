// Header.jsx
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from '../Header/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={styles.divLogo} to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.nav} id="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
