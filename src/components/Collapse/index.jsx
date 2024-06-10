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
            <div 
                className={styles.banniereCollapse} 
                onClick={handleToggle}
                aria-expanded={!isCollapsed}
                role="button"
                tabIndex="0"
            >
                {titre}
                <img
                    src={Vector} 
                    alt='icone flèche'
                    className={`${styles.img} ${isCollapsed ? styles.collapsed : styles.expanded}`} 
                />
            </div>
            <div className={`${styles.description} ${!isCollapsed ? styles.show : ''}`}>
                {description}
            </div>
        </div>
    );
}