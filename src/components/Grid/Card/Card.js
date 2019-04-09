import React from 'react'
import styles from './Card.module.css'

const card = props => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__imgContainer}>
        <img
          className={styles.Card__img}
          src={props.poster}
          alt={props.title}
        />
      </div>
      <div className={styles.Card__description}>
        <h2>
          {props.title} {props.year}
        </h2>
      </div>
    </div>
  )
}

export default card
