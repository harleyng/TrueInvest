import React from 'react'

const Cover = () => {
  return (
    <div className="cover">
      <div className="header-blank"></div>
      <div className="row">
        <div className="col-6 cover-img">
        </div>
        <div className="col-6 cover-content">
          <h1 className="uppercase">
            đọc hiểu <br/>
            báo cáo tài chính
          </h1>
          <h4 className="highlight">Giúp nhà đầu tư tìm hiểu được thông tin và nhận biết được đâu là cổ phiếu tốt</h4>
          <div className="text-center">
            <button className="leaf-button">đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover;
