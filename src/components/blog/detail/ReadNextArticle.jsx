import React from 'react'

const ReadNextArticle = props => {
  return (
    <a className="read-next-article" href={props.href}>
      <div className="row">
        <div className="col-3 read-next-article-img">
          <img src={props.img} alt=""/>
        </div>
        <div className="col read-next-article-intro">
          <h6>{props.title}</h6>
          <p className="public-date">{props.publicDate}</p>
        </div>
      </div>
    </a>
  )
}

export default ReadNextArticle
