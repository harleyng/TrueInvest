import React from 'react'
import Item from './Item'

const List = () => {
  var listItems = [
    {
      id : 1,
      title: 'Facebook Ads vs Instagram Ads: Doanh nghiệp nên quảng cáo trên nền tảng nào?',
      tag: 'kiến thức'
    },
    {
      id : 2,
      title: 'Facebook Ads vs Instagram Ads: Doanh nghiệp nên quảng cáo trên nền tảng nào?',
      tag: 'kiến thức'
    },
    {
      id : 3,
      title: 'Facebook Ads vs Instagram Ads: Doanh nghiệp nên quảng cáo trên nền tảng nào?',
      tag: 'kiến thức'
    }
  ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <Item
                id = {item._id}
                title = {item.title}
                tag = {item.tag}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default List;