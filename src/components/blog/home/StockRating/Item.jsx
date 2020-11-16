import React from 'react'
import {  useRef, useEffect } from 'react'

const Item = (props) => {
  const child = useRef(null)
  useEffect(() => {
    if (props.mostOutstanding === true) {
      child.current.className += ' most-outstanding';
    }
  })
  return (
    <a href="" className="item" ref={child} 
      style={{
        background: `url(${props.img}) no-repeat`,
        backgroundSize: '100% 100%'
      }}
      >
      <div className="content">
        {props.title}
      </div>
    </a>
  )
}

export default Item
