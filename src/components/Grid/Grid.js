import React from 'react'
import Card from './Card/Card'
import styles from './Grid.module.css'

const grid = props => {
  const cards = props.movies.map(movie => {
    return (
      <Card
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        releaseYear={movie.year}
        overview={movie.overview}
        backdrop={movie.backdrop_path}
      />
    )
  })
  return props.error ? (
    <div className={styles.ErrorMessage}>
      Sorry, there was a problem with your search. Please try again
    </div>
  ) : (
    <div className={styles.Grid}>{cards}</div>
  )
}

export default grid
