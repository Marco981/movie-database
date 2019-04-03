import React from 'react'

const form = props => (
  <div>
    <input onChange={props.changed} type='text' />
    <button onClick={props.clicked}>Search!</button>
    <select>
      <option />
      <option />
      <option />
      <option />
    </select>
    <select />
  </div>
)

export default form
