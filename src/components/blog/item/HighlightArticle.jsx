import React from 'react'

const HighlightArticle = props => {
  return (
    <div className="article">
      <a href={props.href}>
        <li>{props.title}</li>
      </a>
    </div>
  )
}

export default HighlightArticle
