import React from 'react'


const BenefitItem = (props) => {
  return (
    <div className="item col-sm-12 col-md-6 col-lg-12">
      <h1 className="number">{props.number}</h1>
      <h4 className="title">{props.title}</h4>
      <p className="content">{props.content}</p>
    </div>
  )
}

export default BenefitItem;
