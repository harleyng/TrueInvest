import React from 'react'
import List from './NewesArticle/List'

const NewestArticles = () => {
  return (
    <div className="newest-articles blog-side-menu-section">
      <div className="blog-side-menu-title">
        <h5>bài viết mới nhất</h5>
      </div>
      <ul>
        <List/>
      </ul>
    </div>
  )
}

export default NewestArticles
