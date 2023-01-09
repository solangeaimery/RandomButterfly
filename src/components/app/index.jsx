import { useState } from "react";
import { CardContainer } from "../CardContainer";
import {
  BsDice1,
  BsDice2Fill,
  BsFillDice3Fill,
  BsDice4Fill,
  BsFillDice5Fill,
  BsDice6,
} from "react-icons/bs"

import styles from "./app.module.css";

export const App = () => {

  const [diceResult, setDiceResult] = useState(6)

  const handleRollingDice = () => {
    let number = parseInt((Math.random() * 6) + 1)
    setDiceResult(number)
  }

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.dice__container}>
          <BsFillDice3Fill className={styles.dice__bump__up} />
          <BsDice1 className={styles.dice__bump__down} />
          <BsDice4Fill className={styles.dice__bump__up} />
        </div>
        <h1 className={styles.title}>Tira el dado, obtené una mariposa al azar!!</h1>
        <div className={styles.dice__container}>
          <BsDice2Fill className={styles.dice__bump__up} />
          <BsDice6 className={styles.dice__bump__down} />
          <BsFillDice5Fill className={styles.dice__bump__up} />
        </div>
      </div>
      <button className={styles.roll__button} onClick={handleRollingDice}>
        <BsDice6 className={styles.button__dice} />Tira!</button>
      <div className={styles.card__result__container}>
        <div className={styles.card__result__title}>El resultado es...{diceResult}</div>
        <div className={styles.card__container}>
          <CardContainer card={diceResult} />
        </div>
      </div>
    </>
  )
}

