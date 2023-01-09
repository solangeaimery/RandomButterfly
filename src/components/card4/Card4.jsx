import React from "react"
import styles from "./card4.module.css"
import img from "../../assets/sapho.jpeg"

export const Card4 = () => {
    return ( 
        <> 
        <div className={styles.card}>
            <h2 className={styles.card__title}>Mariposa Sapho Leuse</h2>
            <div className={styles.card__image}>
                <img src={img} alt="card1" />
            </div>
            <div className={styles.card__description}>
                <p>La subespecie leuce se distribuye de México a Costa Rica. Esta rara especie vuela solo en el sotobosque y subdosel sombreados y es intolerante de los bosques perturbados. Ambos sexos recogen grandes cargas de polen.​​​</p>
            </div>
        </div>
        </>
            
        )
}