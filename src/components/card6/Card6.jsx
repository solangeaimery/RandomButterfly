import React from "react"
import styles from "./card6.module.css"
import img from "../../assets/emperador.jpeg"

export const Card6 = () => {
    return ( 
    <> 
    <div className={styles.card}>
        <h2 className={styles.card__title}>Mariposa Emperador púrpura</h2>
        <div className={styles.card__image}>
            <img src={img} alt="card1" />
        </div>
        <div className={styles.card__description}>
            <p>Se encuentra en bosques de fagus de tierras a bajas elevaciones.
Es la especie más grande de la familia de ninfálidos en Honshu y es la mariposa "nacional de Japón".</p>
        </div>
    </div>
    </>
        
    )
}