import React from "react"
import img from "../../assets/coladragon.jpeg"
import styles from "./card2.module.css"

export const Card2 = () => {
    return ( 
        <> 
        <div className={styles.card}>
            <h2 className={styles.card__title}>Mariposa Cola Dragon</h2>
            <div className={styles.card__image}>
                <img src={img} alt="card1" />
            </div>
            <div className={styles.card__description}>
                <p>La mariposa cola de dragón verde se encuentra en el noreste de la India, en los estados de Assam, Arunachal Pradesh, Manipur y Nagaland</p>
            </div>
        </div>
        </>
            
        )
}