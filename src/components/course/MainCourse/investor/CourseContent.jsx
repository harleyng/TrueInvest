import React from 'react'

const CourseContent = () => {
  return (
    <div className="course-content section">
      <h1 className="section-title uppercase">NỘI DUNG KHOÁ HỌC</h1>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="item">
            <div className="item-title">
              Buổi <span className="big-number"><span className="tab"></span>1</span>
            </div>
            <div className="item-content">
              <p><span className="big-dot"></span>Giới thiệu về phân tích cơ bản</p>
              <p><span className="big-dot"></span>Hướng dẫn sử dụng công cụ tìm kiếm dữ liệu trong phân tích cơ bản</p>
              <p><span className="big-dot"></span>Tư duy về đầu tư dài hạn. Đặt câu hỏi đúng sẽ giúp tìm câu trả lời đúng</p>
              <p><span className="big-dot"></span>Tiền trên thị trường chứng khoán từ đâu mà ra?</p>
              <p><span className="big-dot"></span>6 đặc điểm chung của các cổ phiếu tăng giá trong dài hạn</p>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              Buổi <span className="big-number"><span className="tab"></span>2</span>
            </div>
            <div className="item-content">
              <p><span className="big-dot"></span>Phân tích báo cáo tài chính doanh nghiệp chuyên sâu</p>
              <p><span className="big-dot"></span>Phân tích cổ phiếu ngành sản xuất</p>
              <p><span className="big-dot"></span>Định giá cổ phiếu ngành sản xuất</p>
              <p><span className="big-dot"></span>Phương pháp đầu tư giá trị</p>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              Buổi <span className="big-number"><span className="tab"></span>3</span>
            </div>
            <div className="item-content">
              <p><span className="big-dot"></span>Phân tích cổ phiếu ngân hàng - bất động sản</p>
              <p><span className="big-dot"></span>Định giá cổ phiếu ngân hàng - bất động sản</p>
              <p><span className="big-dot"></span>Năng lực cạnh tranh cốt lõi</p>
              <p><span className="big-dot"></span>Phương pháp đầu tư tăng trưởng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="leaf-button">đăng ký ngay</button>
      </div>
    </div>
  )
}

export default CourseContent;
