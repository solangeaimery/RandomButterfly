import React from "react"
import styles from "./card3.module.css"
import img from "../../assets/gloriabutan.jpeg"

export const Card3 = () => {
    return ( 
        <> 
        <div className={styles.card}>
            <h2 className={styles.card__title}>Mariposa Gloria Butan</h2>
            <div className={styles.card__image}>
                <img src={img} alt="card1" />
            </div>
            <div className={styles.card__description}>
                <p>La “gloria de Bután”, es una especie de mariposa de la familia Papilionidae, endémica del este del Himalaya y las montañas Hengduan, encontrándose entre los 1500 y 2700 metros de altitud. Es poco frecuente de observar en la naturaleza.</p>
            </div>
        </div>
        </>
            
    )
}