import React from 'react'
import styles from './Card.module.css'

const card = props => {
  const url = `https://www.imdb.com/title/${props.imdbId}`

  return (
    <div className={styles.Card}>
      <div className={styles.Card__front}>
        <div className={styles.Card__imgContainer}>
          <img
            className={styles.Card__img}
            src={props.poster}
            alt={props.title}
          />
        </div>
        <div className={styles.Card__titleContainer}>
          <h2>
            {props.title} {props.year}
          </h2>
        </div>
      </div>
      <div className={styles.Card__back}>
        <p>Movie description</p>
      </div>
    </div>
  )
}

export default card
