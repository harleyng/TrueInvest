import React from 'react'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = (props) => {
  return (
    <div className="item-wrap">
      <div className="item-content">
        <div className="blogImg-wrap">
          <a href={props.href}>
            <img src={props.img} alt={props.alt}/>
            <h6>{props.tag}</h6>
            <div className="line"></div>
          </a>
        </div>
        <div className="date"><span>{props.publicDate}</span></div>
        <a href={props.href}>
          <h4 className="title">{props.title}</h4>
        </a>
        <div className="view d-flex justify-content-between align-items-start">
            <a href={props.href}><span className="more">Xem thêm</span></a>
            <div><FontAwesomeIcon icon={faEye} className="view-icon"></FontAwesomeIcon><span className="view-number ml-1">{props.view}</span></div>   
        </div>
      </div>
    </div>
  )
}

export default Item
