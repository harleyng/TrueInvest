import React from 'react'

const TargetStudentItem = (props) => {
  return (
      <div className="col-3 text-center item">
        <div>
          <img src={props.img} alt={props.alt}/>
        </div>
        <div className="item-content">
          <p>{props.content}</p>
        </div>
      </div>
  )
}

export default TargetStudentItem;
