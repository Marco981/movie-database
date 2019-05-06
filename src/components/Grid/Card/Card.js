import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import noImg from '../../../assets/images/no-image.jpg'

const card = props => {
  const imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
  // const backdropImg = imageURL.concat(props.backdrop)
  // const backStyle = {
  //   backgroundImage: 'url(' + backdropImg + ')',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   filter: 'blur(8px)',
  //   height: '100%'
  // }
  return (
    <div className={styles.Card}>
      <div className={styles.Card__front}>
        <div className={styles.Card__imgContainer}>
          <img
            className={styles.Card__img}
            src={props.poster ? imageURL + props.poster : noImg}
            alt={props.title}
          />
        </div>
        <div className={styles.Card__titleContainer}>
          <h2>{props.title}</h2>
          <p> {props.releaseYear}</p>
        </div>
      </div>
      <div className={styles.Card__back}>
        <h2>Movie description</h2>
        <p>{props.overview}</p>
        <Link to={'/' + props.movieId} className={styles.Button}>
          More Info
        </Link>
      </div>
    </div>
  )
}

export default card
