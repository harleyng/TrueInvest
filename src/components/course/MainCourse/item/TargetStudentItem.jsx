import React from 'react'

const TargetStudentItem = (props) => {
  return (
      <div className="col-12 col-lg-3 text-center item">
        <div className="row">
          <div className="col-5 col-md-4 col-lg-12">
            <img src={props.img} alt={props.alt}/>
          </div>
          <div className="item-content col-7 col-md-8 col-lg-12">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
  )
}

export default TargetStudentItem;
