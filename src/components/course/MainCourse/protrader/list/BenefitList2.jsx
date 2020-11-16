import React from 'react'
import BenefitItem from '../../item/BenefitItem'

const BenefitList2 = () => {
  var listItems = [
    {
        id : 3,
        number : '03',
        title: 'Tự phân tích và chọn cổ phiếu tăng 20 – 30% trong 6 – 8 tuần',
        content: 'Xuyên suốt khóa học là hệ thống kiến thức: về các dấu hiệu tạo đỉnh phân phối cần chốt lời, cách nhà đầu tư lớn “Bẫy” nhà đầu tư nhỏ lẻ và lựa chọn cổ phiếu tăng mạnh hơn cổ phiếu khác',
    },
    {
        id : 4,
        number : '04',
        title: 'Được cung cấp một danh mục các mã tiềm năng trong nửa cuối 2020',
        content: 'Học viên sẽ được tư vấn, khuyến nghị đầu tư vào các mã có tiềm năng tăng để đạt được kết quả tốt nhất khi thực chiến',
    }
  ]

  return (
    <React.Fragment>
        {listItems.map(item=>(
            <React.Fragment key = {item._id}>
                <BenefitItem
                  id = {item._id}
                  number = {item.number}
                  title = {item.title}
                  content = {item.content}
                />
            </React.Fragment>
        ))}
    </React.Fragment>
  ) 
}

export default BenefitList2;
