import React from 'react'
import styles from './Card.module.css'

const card = props => {
  const over = e => {
    console.log(e.target.closest('.Card'))

    // e.target.closest('Card').classList.add('hover')
  }

  const out = e => {
    // e.target.closest('Card').classList.remove('hover')
  }

  const url = `https://www.imdb.com/title/${props.imdbId}`

  return (
    <div
      data-name='class'
      className={styles.Card}
      onMouseOver={over}
      onMouseOut={out}
    >
      <div className={styles.Card__imgContainer}>
        <img
          className={styles.Card__img}
          src={props.poster}
          alt={props.title}
        />
        <a className={styles.Button} href={url} taget='_blank'>
          IMDB
        </a>
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
