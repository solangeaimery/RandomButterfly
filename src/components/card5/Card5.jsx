import React from "react"
import styles from "./card5.module.css"
import img from "../../assets/ulises.jpeg"


export const Card5 = () => {
    return ( 
        <> 
        <div className={styles.card}>
            <h2 className={styles.card__title}>Mariposa Papilio Ulysses</h2>
            <div className={styles.card__image}>
                <img src={img} alt="card1" />
            </div>
            <div className={styles.card__description}>
                <p>Esta mariposa es el emblema turístico de Queensland. Propia del noroeste Australia, Nueva Guinea, Molucas e islas próximas</p>
            </div>
        </div>
        </>
            
        )
}