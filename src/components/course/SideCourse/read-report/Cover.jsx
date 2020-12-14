import React from 'react'

const Cover = () => {
  return (
    <div className="cover">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-12 col-lg-5 col-xl-6 cover-img">
          </div>
          <div className="col-md-12 col-lg-7 col-xl-6 cover-content">
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
      {/* </div> */}
    </div>
  )
}

export default Cover;
