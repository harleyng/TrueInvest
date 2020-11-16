import React from 'react'
import Item from './Item'

import one from '../../../../assets/img/blog/stockrating/1.jpeg'
import two from '../../../../assets/img/blog/stockrating/2.jpg'
import three from '../../../../assets/img/blog/stockrating/3.jpg'
import four from '../../../../assets/img/blog/stockrating/4.jpg'
import five from '../../../../assets/img/blog/stockrating/5.jpg'
import six from '../../../../assets/img/blog/stockrating/6.jpg'
import seven from '../../../../assets/img/blog/stockrating/7.jpeg'


const List = () => {
  var listItems = [
    {
      id : 1,
      title: 'Các chỉ số đo lường hiệu quả ngành SaaS (Software as a service)',
      img: one,
      alt: '',
      href: '',
      mostOutstanding: true
    },
    {
      id : 2,
      title: '9 KPI và metrics quan trọng trong ngành Logistics',
      img: two,
      alt: '',
      href: '',
      mostOutstanding: false
    },
    {
      id : 3,
      title: 'KPI và metrics đo lường hiệu quả ngành bán lẻ',
      img: three,
      alt: '',
      href: '',
      mostOutstanding: false
    },
    {
      id : 4,
      title: 'Recap Webinar Nielsen Case Competition 2020 Information Day',
      img: four,
      alt: '',
      href: '',
      mostOutstanding: false
    },
    {
      id : 5,
      title: 'Dữ liệu vận hành trong doanh nghiệp là gì? Ví dụ về Metrics và KPI cho từng phòng ban',
      img: five,
      alt: '',
      href: '',
      mostOutstanding: false
    },
    {
      id : 6,
      title: 'Product Metrics - Các chỉ số đo lường chất lượng của một sản phẩm',
      img: six,
      alt: '',
      href: '',
      mostOutstanding: false
    },
    {
      id : 7,
      title: '10 KPIs quan trọng trong Brand Research - Nghiên cứu thương hiệu dựa trên Data',
      img: seven,
      alt: '',
      href: '',
      mostOutstanding: false
    }
  ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <Item
                id = {item._id}
                title = {item.title}
                img = {item.img}
                alt = {item.alt}
                href = {item.href}
                mostOutstanding = {item.mostOutstanding}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default List;