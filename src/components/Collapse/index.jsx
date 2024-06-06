// Collapse.jsx
import React, { useState } from 'react';
import Vector from '../../assets/Vector.png'; 
import styles from './Collapse.module.css';

export default function Collapse({ titre, description }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.banniereCollapse} onClick={handleToggle}>
                {titre}
                <img
                    src={Vector} 
                    alt='icone flèche'
                    className={`${styles.img} ${isCollapsed ? styles.collapsed : styles.expanded}`} // Applique la rotation en fonction de l'état
                />
            </div>
            <div className={`${styles.description} ${!isCollapsed ? styles.show : ''}`}>
                {description}
            </div>
        </div>
    );
}
