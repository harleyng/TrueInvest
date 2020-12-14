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
                <h4>Kết cấu <br/> của báo cáo tài chính</h4>
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Cách thức tìm kiếm thông tin</p>
              <p><span className="big-dot"></span>Cách đọc đánh giá của kiểm toán</p>
              <p><span className="big-dot"></span>Cách đọc báo cáo kết quả kinh doanh</p>
              <p><span className="big-dot"></span>Đánh giá doanh thu, Lợi nhuận, biên lợi nhuận </p>
              <p><span className="big-dot"></span>Bóc tách doanh thu của doanh nghiệp</p>
              <p><span className="big-dot"></span>Bóc tách giá vốn của doanh nghiệp </p>
              <p><span className="big-dot"></span>Xem xét các hoạt động đầu tư của doanh nghiệp</p>
              <p><span className="big-dot"></span>Xem tỷ lệ khấu hao TSCĐ của doanh nghiệp</p>
            </div>
          </div>
          <div className="item">
            <div className="row item-title">
              <div className="col-1 col-lg-3 col-xl-2 item-number"><h2>02</h2></div>
              <div className="col-11 col-lg-9 col-xl-10 uppercase">
                <h4>Cách đọc <br/> Bảng cân đối kế toán</h4>
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Phân tích tỷ lệ: Tiền mặt của doanh nghiệp có đủ khả năng trả cổ tức</p>
              <p><span className="big-dot"></span>Cách đọc các khoản nợ của doanh nghiệp: Các khoản phải thu, phải trả?</p>
              <p><span className="big-dot"></span>Phân tích Tài sản cố định: Giá trị tài sản dở dang để ước tính chu kỳ mới của TSCĐ</p>
            </div>
          </div>
          <div className="item">
            <div className="row item-title">
              <div className="col-1 col-lg-3 col-xl-2 item-number"><h2>03</h2></div>
              <div className="col-11 col-lg-9 col-xl-10 uppercase">
                <h4>Phân tích tổng hợp <br/> báo cáo tài chính</h4>
              </div>
            </div>
            <div>
              <p><span className="big-dot"></span>Phân tích kết hợp các nội dung trong BCTC để đưa ra quyết định đúng đắn</p>
              <p><span className="big-dot"></span>Cách nhận biết những gian lận trong BCTC của doanh nghiệp</p>
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
