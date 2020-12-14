import React from 'react'

const TheBestInClassItem = (props) => {
  return (
    <div className="row item">
      <div className="col-3 col-lg-4">
        <img src={props.img} alt={props.alt}/>
      </div>
      <div className="col-9 col-lg-8 content"><span className="highlight">{props.highlight}</span><br/>{props.content}</div>
    </div>
  )
}

export default TheBestInClassItem;
