import React from 'react'
import BenefitItem from '../../item/BenefitItem'

const BenefitList1 = () => {
  var  listItems = [
    {
        id : 1,
        number : '01',
        title: 'Hệ thống hóa từ Tư duy, Kiến thức, Kỹ năng, Kinh nghiệm',
        content: 'Nắm vững hệ thống kiến thức nền, cốt lõi về chứng khoán, xu hướng giá và khối lượng giao dịch. Học viên được thực hành trực tiếp trên cổ phiếu của các công ty để rèn luyện kỹ năng phân tích và tích lũy kinh nghiệm thực chiến',
    },
    {
        id : 2,
        number : '02',
        title: 'Lọc cổ phiếu có nền tảng tài chính tốt',
        content: 'Dựa trên kiến thức về xu hướng giá để xác định được: đâu là cổ phiếu đang tăng và đâu là cổ phiếu đang giảm?',
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
