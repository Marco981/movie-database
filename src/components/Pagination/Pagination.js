import React from 'react'
import styles from './Pagination.module.css'

const pagination = props => {
  const pagesArr = []
  for (let i = 1; i <= props.numPages; i++) {
    pagesArr.push(i)
  }
  const pageDiv = pagesArr.map((page, index) => {
    return (
      <div className={styles.PageDiv} key={index}>
        {page}
      </div>
    )
  })

  return <div className={styles.Pagination}>{pageDiv}</div>
}

export default pagination
