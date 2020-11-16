import React from 'react'

const Item = props => {
  return (
    <div className="article">
      <a href={props.href}>
        <li>{props.title}</li>
      </a>
    </div>
  )
}

export default Item
