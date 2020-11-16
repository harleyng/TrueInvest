import React from 'react'
import TargetStudentItem from '../../item/TargetStudentItem'

import first from '../../../../../assets/img/course/protrader/khoa-hoc-danh-cho-ai-1.jpg'
import second from '../../../../../assets/img/course/protrader/khoa-hoc-danh-cho-ai-2.jpg'
import third from '../../../../../assets/img/course/protrader/khoa-hoc-danh-cho-ai-3.jpg'

const TargetStudentList = () => {
  var listItems = [
    {
      id : 1,
      img : first,
      alt : 'Man with growing graph',
      content: 'Nhà đầu tư muốn có lợi nhuận trung bình 20%/năm trên thị trường chứng khoán',
    },
    {
      id : 2,
      img : second,
      alt : 'Group with analysis computer screen',
      content: 'Nhà đầu tư sử dụng phân tích kỹ thuật không hiệu quả, chưa có hệ thống đầu tư tốt',
    },
    {
      id : 3,
      img : third,
      alt : 'Two man shaking hands',
      content: 'Nhà đầu tư chưa biết sử dụng khối lượng như một công cụ hiệu quả trên thị trường chứng khoán',
    }
  ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <TargetStudentItem
                id = {item._id}
                img = {item.img}
                alt = {item.alt}
                content = {item.content}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default TargetStudentList;
