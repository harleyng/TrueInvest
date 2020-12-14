import React from 'react'

const Item = (props) => {
  return (
    <a href="">
      <div className="article-wrap">
        <div className="article-content">
          <div className="row">
            <div className="article-img col-md-6 col-lg-3">
              <img src={props.img} alt={props.alt}/>
            </div>
            <div className="article-info col-md-6 col-lg-4">
              <h3 className="title">{props.title}</h3>
              <p>By <span className="author">{props.author}</span> | {props.publicDate}</p>
            </div>
            <div className="col-lg-5">
              <p className="article-brief-desc">{props.briefDesc}</p>
              <div className="more"><a href=""><h6><span>Xem Thêm</span> &gt;</h6></a></div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Item;
