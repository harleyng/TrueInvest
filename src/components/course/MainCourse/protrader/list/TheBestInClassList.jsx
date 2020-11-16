import React from 'react'
import TheBestInClassItem from '../../item/TheBestInClassItem'

import Course from '../../../../../assets/img/course/protrader/khoa-hoc.png'
import Curriculum from '../../../../../assets/img/course/protrader/giao-trinh.png'
import Teacher from '../../../../../assets/img/course/protrader/giang-vien.png'
import Provide from '../../../../../assets/img/course/protrader/cung-cap.png'

const TheBestInClassList = () => {

  var listItems = [
      {
        id : 1,
        img : Course,
        alt : 'Icon Khoá Học',
        highlight : 'Khoá học',
        content: 'được lựa chọn nhiều nhất',
      },
      {
        id : 2,
        img : Curriculum,
        alt : 'Icon Giáo Trình',
        highlight : 'Giáo trình',
        content: 'bài bản, cập nhật',
      },
      {
        id : 3,
        img : Teacher,
        alt : 'Icon Giảng Viên',
        highlight : 'Giảng viên',
        content: 'là chuyên gia nhiều năm kinh nghiệm đầu tư chứng khoán',
      },
      {
        id : 4,
        img : Provide,
        alt : 'Icon Cung Cấp',
        highlight : 'Cung cấp',
        content: 'danh mục các mã tiềm năng',
      }
    ]

  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <TheBestInClassItem
                id = {item._id}
                img = {item.img}
                alt = {item.alt}
                highlight = {item.highlight}
                content = {item.content}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default TheBestInClassList;