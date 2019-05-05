import React from 'react'
import styles from './Pagination.module.css'

const pagination = props => {
  const pagesArr = []
  for (let i = 1; i <= props.numPages; i++) {
    pagesArr.push(i)
  }
  const pageDiv = props.error
    ? null
    : pagesArr.map((page, index) => {
      const classes = props.page === page ? styles.active : null
      return (
        <div
          onClick={props.clicked}
          className={[styles.PageDiv, classes].join(' ')}
          key={index}
        >
          {page}
        </div>
      )
    })

  return <div className={styles.Pagination}>{pageDiv}</div>
}

export default pagination
