import React from 'react'

const Item = (props) => {
  return (
    <div className="hot-new">
      <h4 className="title">{props.title}</h4>
      <div className="row justify-content-between mr-0">
        <div className="col-4">
          <div className="tag"><h6>{props.tag}</h6></div>
        </div>
        <div className="more"><a href=""><h6><span>Xem Thêm</span> &gt;</h6></a></div>
      </div>
    </div>
  )
}

export default Item;
