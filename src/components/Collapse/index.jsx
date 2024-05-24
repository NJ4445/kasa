// Collapse.jsx
import React, { useState } from 'react';
import vectorOpen from '../../assets/Vector_open.png';
import vectorClosed from '../../assets/Vector_closed.png';
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
                <img src={isCollapsed ? vectorClosed : vectorOpen} alt='icone flèche' className={styles.img} />
            </div>
            {!isCollapsed && <div className={styles.description}>{description}</div>}
        </div>
    );
}
