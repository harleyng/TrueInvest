import React from 'react'


const Item = (props) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-6 content">
          <h1 className="section-title">cảm nhận của khách hàng</h1>
          <div className="small-ava"><img src={props.ava} alt="Người feedback"/></div>
          <div className="feedback">
            <p>{props.feedback}</p>
          </div>
          <div className="info">
            <h6>{props.name}, {props.city}</h6>
          </div>
        </div>
        <div className="col-6 feedback-person">
          <img src={props.ava} alt="Người feedback"/>
        </div>
      </div>
    </div>
  )
}

export default Item;
