import { useState } from 'react'
import vectorOpen from '../../assets/Vector_open.png'
import vectorClosed from '../../assets/Vector_closed.png'
import styles from './Collapse.module.css'

export default function Collapse({titre, description}) {
    const [vector, setVector] = useState(false);

    function handleVectorClick(){
        setVector(!vector);
    }

    return (
        <div className={styles.collapse}>
            <div className={styles.banniereCollapse} onClick={() => handleVectorClick()}>
                {titre}
                {vector ? <img src={vectorOpen} alt='icone fleche ouverte' className={styles.img}/> : <img src={vectorClosed} alt='icone fleche fermee' className={styles.img} />}
            </div>
            {vector && (<div>{description}</div>)}
        </div>
    )
}

