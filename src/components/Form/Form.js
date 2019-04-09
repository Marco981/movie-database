import React from 'react'
import styles from './Form.module.css'

const form = props => (
  <form className={styles.Form}>
    <input onChange={props.changed} value={props.value} type='text' />
    <button onClick={props.clicked}>Search!</button>
  </form>
)

export default form
