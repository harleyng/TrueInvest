import React from 'react'

const BenefitItem = (props) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-3 item-img">
          <img src={props.img} alt={props.alt}/>
        </div>
        <div className="col-9 item-content">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default BenefitItem;
