import React from "react"
import styles from "./card1.module.css"
import img from "../../assets/monarca.jpeg"

export const Card1 = () => {
    return ( 
    <> 
    <div className={styles.card}>
        <h2 className={styles.card__title}>Mariposa Monarca</h2>
        <div className={styles.card__image}>
            <img src={img} alt="card1" />
        </div>
        <div className={styles.card__description}>
            <p>La mariposa monarca es un insecto lepidóptero ditrisio de la familia Nymphalidae, superfamilia Papilionoidea. Es quizás la más conocida de todas las mariposas de América del Norte. Desde el siglo XIX ha sido introducida en Nueva Zelanda y en Australia.​​​</p>
        </div>
    </div>
    </>
        
    )
}