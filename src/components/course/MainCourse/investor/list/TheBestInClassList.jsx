import React from 'react'
import TheBestInClassItem from '../../item/TheBestInClassItem'

import Course from '../../../../../assets/img/course/protrader/khoa-hoc.png'
import Curriculum from '../../../../../assets/img/course/protrader/giao-trinh.png'
import Teacher from '../../../../../assets/img/course/protrader/giang-vien.png'

const TheBestInClassList = () => {

  var listItems = [
      {
        id : 1,
        img : Course,
        alt : 'Icon Khoá Học',
        highlight : 'Khoá học',
        content: 'với phương pháp quan trọng nhất',
      },
      {
        id : 2,
        img : Curriculum,
        alt : 'Icon Giáo Trình',
        highlight : 'Kiến thức ',
        content: 'thực tế, thường xuyên cập nhật',
      },
      {
        id : 3,
        img : Teacher,
        alt : 'Icon Giảng Viên',
        highlight : 'Tư vấn',
        content: 'danh mục trung - dài hạn',
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