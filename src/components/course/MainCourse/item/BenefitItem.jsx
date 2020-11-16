import React from 'react'


const BenefitItem = (props) => {
  return (
    <div className="item">
      <h1 className="number">{props.number}</h1>
      <h4 className="title">{props.title}</h4>
      <p className="content">{props.content}</p>
    </div>
  )
}

export default BenefitItem;
