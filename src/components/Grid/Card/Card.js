import React from 'react'
import styles from './Card.module.css'
import noImg from '../../../assets/images/zombomeme05052019174959.jpg'

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
        <a href='' className={styles.Button}>
          More Info
        </a>
      </div>
    </div>
  )
}

export default card
