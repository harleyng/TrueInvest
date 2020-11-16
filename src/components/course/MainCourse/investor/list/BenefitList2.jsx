import React from 'react'
import BenefitItem from '../../item/BenefitItem'

const BenefitList2 = () => {
  var listItems = [
    {
        id : 3,
        number : '03',
        title: 'Cải thiện tâm lý',
        content: 'Hệ thống tư duy đầu tư dài hạn giúp học viên cải thiện, ổn định tâm lý, tránh hoảng loạn tại thời điểm thị trường tạo đáy và hưng phấn ở thời điểm tạo đỉnh',
    },
    {
        id : 4,
        number : '04',
        title: 'Tìm được siêu cổ phiếu có tiềm năng x2, x3 trong dài hạn',
        content: 'Hiểu rõ phương pháp tìm kiếm các công ty có lợi thế cạnh tranh dài hạn và công ty có giá quá rẻ so với giá trị thật. Để thấy được tiềm năng tăng giá dài hạn của các cổ phiếu',
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
