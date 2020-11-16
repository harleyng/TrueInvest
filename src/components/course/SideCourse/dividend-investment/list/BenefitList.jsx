import React from 'react'
import BenefitItem from '../../item/BenefitItem'

import first from '../../../../../assets/img/course/read-report/benefit-1.png'
import second from '../../../../../assets/img/course/read-report/benefit-2.png'
import third from '../../../../../assets/img/course/read-report/benefit-3.png'

const BenefitList = () => {
  var  listItems = [
      {
        id : 1,
        img : first,
        alt : 'Icon Growing Graph',
        content: 'Tự xây dưng danh mục đầu tư cổ phiếu trả cổ tức với lợi nhuận từ 10 - 15%/năm ',
      },
      {
        id : 2,
        img : second,
        alt : 'Icon Company',
        content: 'Không mất nhiều thời gian nhìn bảng giá, chỉ cần cập nhật doanh nghiệp hàng quý',
      }
    ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <BenefitItem
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