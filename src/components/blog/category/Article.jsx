import React from 'react'
import {ImFire} from 'react-icons/im'

const Article = props => {
  return (
    <a className="article mb-5" href={props.href}>
      <img className="article-img" src={props.img} alt=""/>
      <h4 className="title">{props.title}</h4>
      <p className="article-info">{props.publicDate} <span className="flame-icon"><ImFire/></span> {props.view}</p>
      <p className="brief">{props.briefDesc}</p>
    </a>
  )
}

export default Article
