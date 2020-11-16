import React from 'react'
import Header from '../../components/layouts/BlogHeader'

const BlogLayout = (props) => {
  return (
    <div>
      <Header/>
        <div className="blogContent">
        {props.children}
        </div>
    </div>
  )
}

export default BlogLayout;