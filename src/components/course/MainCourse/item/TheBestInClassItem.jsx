import React from 'react'

const TheBestInClassItem = (props) => {
  return (
    <div className="row item">
      <div className="col-4">
        <img src={props.img} alt={props.alt}/>
      </div>
      <div className="col-8 content"><span className="highlight">{props.highlight}</span><br/>{props.content}</div>
    </div>
  )
}

export default TheBestInClassItem;
