// Footer.jsx
import React from 'react';
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.divLogo}>
               <img src={logo} alt='logo' /> 
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}