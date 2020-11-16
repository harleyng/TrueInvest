import React from 'react'

const Article = props => {
  return (
    <a className="article" href={props.href}>
      <img src={props.img} alt=""/>
      <h5>{props.title}</h5>
      
    </a>
  )
}

export default Article
