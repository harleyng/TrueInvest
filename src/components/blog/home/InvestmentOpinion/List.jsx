import React from 'react'
import Item from './Item'

const List = () => {
  var listItems = [
    {
      id : 1,
      tag: 'quảng cáo online',
      title: '7 phương pháp hữu hiệu giúp tăng lưu lượng truy cập vào website',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2020/01/chien-dich-hien-thi-tren-Google-5.jpg',
      alt: '',
      href: '',
      publicDate: '13 Th10 2020',
      view: '80'
    },
    {
      id : 2,
      tag: 'bán hàng hiệu quả',
      title: '5 xu hướng PPC giúp doanh nghiệp tăng hiệu suất trong năm 2020',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2020/01/trai-nghiem-khach-hang-cover.jpg',
      alt: '',
      href: '',
      publicDate: '10 Th10 2020',
      view: '67'    
    },
    {
      id : 3,
      tag: 'kinh nghiệm vàng',
      title: 'Khởi tạo chiến lược video marketing với 10 công cụ hữu ích nhất',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2020/01/SERPS.jpg',
      alt: '',
      href: '',
      publicDate: '07 Th10 2020',
      view: '47' 
    },
    {
      id : 4,
      tag : 'kinh nghiệm vàng',
      title: '4 mẹo cá nhân hóa chiến dịch email marketing bằng phân tích dữ liệu',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2019/12/chien-dich-email-marketing-cover.jpg',
      alt: '',
      href: '',
      publicDate: '23 Th10 2020',
      view: '94'     
    },
    {
      id : 5,
      tag : 'kinh nghiệm vàng',
      title: '5 yếu tố “sống còn” giúp tăng tỷ lệ chuyển đổi từ bài đăng Facebook',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2019/12/tang-ti-le-chuyen-doi-cover.jpg',
      alt: '',
      href: '',
      publicDate: '23 Th10 2020',
      view: '36'       
    },
    {
      id : 6,
      tag : 'kinh nghiệm vàng',
      title: '7 sai lầm có thể phá hỏng chiến lược social selling của bạn',
      img: 'https://www.chili.vn/blogs/wp-content/uploads/2019/12/social-selling-cover.jpg',
      alt: '',
      href: '',
      publicDate: '01 Th11 2020',
      view: '64'  
    }
  ]
  return (
    <React.Fragment>
      {listItems.map(item=>(
          <React.Fragment key = {item._id}>
              <Item
                id = {item._id}
                tag = {item.tag}
                title = {item.title}
                img = {item.img}
                alt = {item.alt}
                href = {item.href}
                publicDate = {item.publicDate}
                view = {item.view}
              />
          </React.Fragment>
      ))}
  </React.Fragment>
  )
}

export default List;