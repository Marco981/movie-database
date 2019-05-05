import React from 'react'
import styles from './Form.module.css'

const form = props => (
  <div className={styles.Form}>
    <input onChange={props.changed} value={props.value} type='text' />
    <button onClick={props.clicked}>Search!</button>
  </div>
)

export default form
