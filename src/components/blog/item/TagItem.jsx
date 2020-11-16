import React from 'react'

const TagItem = props => {
  return (
    <a href={props.href} className="item-wrap">
      <div className="item-content">
        {props.name} ({props.quantity})
      </div>
    </a>
  )
}

export default TagItem
