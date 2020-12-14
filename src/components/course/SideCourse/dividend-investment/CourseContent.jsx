import React from 'react'

const CourseContent = () => {
  return (
    <div className="course-content section">
      <h1 className="section-title">nội dung khoá học</h1>
      <div className="container">
        <div className="d-flex content">
          <div className="item">
            <div className="row item-title">
              <div className="col-1 col-lg-3 col-xl-2 item-number"><span><h2>01</h2></span></div>
              <div className="col-11 col-lg-9 col-xl-10 uppercase">
                {/* <h4>Kết cấu <br/> của báo cáo tài chính</h4> */}
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Thị giá cổ phiếu và tỷ lệ lợi tức</p>
              <p><span className="big-dot"></span>Các ngành nghề cơ bản và tiềm năng trả cổ tức</p>
              <p><span className="big-dot"></span>Lợi nhuận và cổ tức</p>
              <p><span className="big-dot"></span>Đánh giá sức mạnh tài chính của doanh nghiệp </p>
              <p><span className="big-dot"></span>Đánh giá khả năng chi trả cổ tức</p>
            </div>
          </div>
          <div className="item">
            <div className="row item-title">
              <div className="col-1 col-lg-3 col-xl-2 item-number"><h2>02</h2></div>
              <div className="col-11 col-lg-9 col-xl-10 uppercase">
                {/* <h4>Cách đọc <br/> Bảng cân đối kế toán</h4> */}
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Lọc cổ phiếu </p>
              <p><span className="big-dot"></span>Các công ty tìm kiếm cổ phiếu</p>
              <p><span className="big-dot"></span>Đánh giá lịch sử trả cổ tức và dự đoán cổ tức tương lai</p>
              <p><span className="big-dot"></span>Định giá cổ phiếu trả cổ tức</p>
            </div>
          </div>
          <div className="item">
            <div className="row item-title">
              <div className="col-1 col-lg-3 col-xl-2 item-number"><h2>03</h2></div>
              <div className="col-11 col-lg-9 col-xl-10 uppercase">
                {/* <h4>Phân tích tổng hợp <br/> báo cáo tài chính</h4> */}
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Đánh giá các công ty có tiềm năng trả cổ tức</p>
              <p><span className="big-dot"></span>Lên shortlist cổ phiếu tiềm năng</p>
              <p><span className="big-dot"></span>Lựa chọn và Xây dựng danh mục đầu tư</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="leaf-button">đăng ký ngay</button>
        </div>
      </div>
    </div>
  )
}

export default CourseContent;
