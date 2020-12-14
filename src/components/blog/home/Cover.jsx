import React from 'react'
import List from './Cover/List'

const Cover = () => {
  return (
    <div className="cover-wrap">
      <div className="cover-content">
        <div className="row">
          <div className="col-md-12 col-lg-7 hottest-new text-justify">
            <h1 className="title">Facebook Messenger - Doanh nghiệp nên sử dụng thế nào để thu hút khách hàng?</h1>
            <div className="tag"><h6>kiến thức</h6></div>
            <p className="brief-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique ipsam reiciendis libero dolores?...</p>
            <div className="more"><a href=""><h6 style={{fontSize: "1.25rem"}}><span>Xem Thêm</span> &gt;</h6></a></div>
          </div>
          <div className="col-md-12 col-lg-5 hot-news-wrap">
            <div className="hot-news-content">
              <List/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover;

