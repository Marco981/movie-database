import React from 'react'
import Card from './Card/Card'

const grid = props => {
  const cards = props.movies.map(movie => {
    return (
      <Card
        key={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
        year={movie.Year}
      />
    )
  })
  return cards
}

export default grid
