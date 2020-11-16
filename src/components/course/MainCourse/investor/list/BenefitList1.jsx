import React from 'react'
import BenefitItem from '../../item/BenefitItem'

const BenefitList1 = () => {
  var  listItems = [
    {
        id : 1,
        number : '01',
        title: 'Hệ thống tư duy đầu tư',
        content: 'Khóa học cung cấp các kỹ năng, kiến thức về đầu tư dài hạn, giúp học viên có được hệ thống tư duy đầu tư kinh điển của những nhà đầu tư thành công như Warren Buffett, Philip Fisher',
    },
    {
        id : 2,
        number : '02',
        title: 'Phương pháp đầu tư phù hợp trong từng giai đoạn thị trường',
        content: 'Nắm vững cách xác định vùng giá hợp lý của cổ phiếu, phân tích mô hình kinh doanh các ngành nghề cụ thể và dự đoán hành động của họ trong các giai đoạn khác nhau',
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

export default BenefitList1;
