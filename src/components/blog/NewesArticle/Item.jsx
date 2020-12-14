import React from 'react'

const Item = props => {
  return (
    <a className="article" href={props.href} style={{display:'block'}}>
      <div className="row">
        <div className="col-4 pr-0"><img src="https://loremflickr.com/120/90" alt=""/></div>
        <div className="col-8">
          <li>{props.title}</li>
        </div>
      </div>
    </a>
  )
}

export default Item
