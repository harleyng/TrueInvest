import React from 'react'
import TagItem from './item/TagItem'

const Tag = () => {
  const data = [
    {
      id : 1,
      href : '',
      name : 'above the line',
      quantity : 3
    },
    {
      id : 2,
      href : '',
      name : 'facebook',
      quantity : 3
    },
    {
      id : 3,
      href : '',
      name : 'above the line',
      quantity : 3
    },
    {
      id : 4,
      href : '',
      name : 'data analysis',
      quantity : 3
    },
    {
      id : 5,
      href : '',
      name : 'digital marketing',
      quantity : 3
    },
    {
      id : 6,
      href : '',
      name : 'word of mouth',
      quantity : 3
    },
    {
      id : 7,
      href : '',
      name : 'trade market',
      quantity : 3
    },
    {
      id : 8,
      href : '',
      name : 'ttl',
      quantity : 3
    },
    {
      id : 1,
      href : '',
      name : 'live chat',
      quantity : 3
    },
    {
      id : 9,
      href : '',
      name : 'sass',
      quantity : 3
    },
    {
      id : 10,
      href : '',
      name : 'inhouse',
      quantity : 3
    },
    {
      id : 11,
      href : '',
      name : 'tiktok',
      quantity : 3
    },
    {
      id : 12,
      href : '',
      name : 'social media',
      quantity : 3
    },
    {
      id : 13,
      href : '',
      name : 'seo',
      quantity : 3
    },
    {
      id : 14,
      href : '',
      name : 'fmcg',
      quantity : 3
    },
    {
      id : 15,
      href : '',
      name : 'metrics',
      quantity : 3
    },
    {
      id : 16,
      href : '',
      name : 'posm',
      quantity : 3
    }
  ]
  return (
    <div className="tags-side-menu">
      <div className="blog-side-menu-title">
        <h5>tag</h5>
      </div>
      <div className="tag-side-menu">
        {data.map(item=>(
          <React.Fragment key={item._id}>
            <TagItem
              id = {item._id}
              href = {item.href}
              name = {item.name}
              quantity = {item.quantity}
            ></TagItem>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Tag
