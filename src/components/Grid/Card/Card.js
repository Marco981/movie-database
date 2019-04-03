import React from 'react'

const card = props => (
  <div>
    {props.title}
    <img src={props.poster} alt={props.title} />
  </div>
)

export default card
