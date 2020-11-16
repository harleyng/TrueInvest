import React from 'react'
import HighlightArticle from './item/HighlightArticle'
const HighlightArticles = () => {
  const data = [
    {
      id : 1,
      href: '',
      title: 'Delectus fuga numquam qui accusantium possimus.'
    },
    {
      id : 2,
      href: '',
      title: 'Lorem ipsum dolor sit amet.'
    },
    {
      id : 3,
      href: '',
      title: 'Lorem ipsum dolor sis qui accusantium possimus.'
    },
    {
      id : 4,
      href: '',
      title: 'Lorem ipsum sit aa numquam qui accusantium possimus.'
    },
    {
      id : 5,
      href: '',
      title: 'Lorem ipsum dong elit. Delectus fuga numquam qui accusantium possimus.'
    },
    {
      id : 6,
      href: '',
      title: 'Lorem ipsum dolor sit amet, adiplectus fuga numquam qui accusantium possimus.'
    },
    {
      id : 7,
      href: '',
      title: 'Lorem ipsum dosicing elit. Delectus fuga numquam qui accusantium possimus.'
    },
    {
      id : 8,
      href: '',
      title: 'Lorem ipsumtus fuga numquam qui accusantium possimus.'
    },
    {
      id : 9,
      href: '',
      title: 'Lorem ipsum dolor sit amlit. Delectus fuga ni accusantium possimus.'
    },
    {
      id : 10,
      href: '',
      title: 'Lorem ipsum dolor sit amantium possimus.'
    },
  ]
  return (
    <div className="blog-side-menu-section">
      <div className="blog-side-menu-title">
        <h5>bài viết nổi bật</h5>
      </div>
      <ul>
        {data.map(item=>(
          <React.Fragment key = {item._id}>
            <HighlightArticle
              id = {item._id}
              href = {item.href}
              title = {item.title}
            >
            </HighlightArticle>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default HighlightArticles
