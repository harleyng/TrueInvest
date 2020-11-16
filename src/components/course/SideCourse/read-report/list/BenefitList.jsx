import React from 'react'
import Item from '../../item/BenefitItem'

import first from '../../../../../assets/img/course/read-report/benefit-1.png'
import second from '../../../../../assets/img/course/read-report/benefit-2.png'
import third from '../../../../../assets/img/course/read-report/benefit-3.png'

const BenefitList = () => {
  var  listItems = [
      {
        id : 1,
        img : first,
        alt : 'Icon Growing Graph',
        content: 'Nhà đầu tư học được cách tổng hợp, chọn lọc, sử dụng thông tin để đầu tư trên thị trường chứng khoán',
      },
      {
        id : 2,
        img : second,
        alt : 'Icon Company',
        content: 'Sử dụng báo cáo tài chính để chọn lọc công ty có chất lượng cao, tránh được các công ty có rủi ro',
      },
      {
        id : 3,
        img : third,
        alt : 'Icon Money Tree',
        content: 'Tìm được các công ty có tiềm năng tăng giá nhờ nâng cao năng lực sản xuất',
      }
    ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <Item
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

export default BenefitList;