import React from 'react'
import {ImFire} from 'react-icons/im'

const Article = props => {
  let href = window.location.href + props.href
  console.log(href)
  return (
    <a className="article mb-5" href={href}>
      <img className="article-img" src={props.img} alt=""/>
      <h4 className="title">{props.title}</h4>
      <p className="article-info">{props.publicDate} <span className="flame-icon"><ImFire/></span> {props.view}</p>
      <p className="brief">{props.briefDesc}</p>
    </a>
  )
}

export default Article
