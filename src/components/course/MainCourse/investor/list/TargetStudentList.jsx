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
      content: 'Nếu bạn đã có kinh nghiệm đầu tư chứng khoán nhưng chưa nắm giữ được lâu dài để ăn trọn vẹn con sóng dài hạn cho chưa đủ kiến thức và niềm tin để nắm giữ cổ phiếu',
    },
    {
      id : 2,
      img : second,
      alt : 'Group with analysis computer screen',
      content: 'Nếu bạn có số vốn nhàn rỗi trên 3 tỷ và muốn tìm kiếm, nắm giữ các CP tiềm năng tăng gấp 2 - 3 lần trong dài hạn.',
    },
    {
      id : 3,
      img : third,
      alt : 'Two man shaking hands',
      content: 'Nếu bạn là chủ doanh nghiệp và cần có góc nhìn đầu tư bài bản bổ trợ cho hoạt động kinh doanh của doanh nghiệp.',
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
