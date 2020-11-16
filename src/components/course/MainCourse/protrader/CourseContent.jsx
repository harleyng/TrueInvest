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
              <p><span className="big-dot"></span>Các khái niệm cơ bản của VSA</p>
              <p><span className="big-dot"></span>Các khái niệm cơ bản: <br/>
                <table>
                  <tr>
                    <td>- Volume</td>
                    <td>- Phân phối – Tích lũy</td>
                  </tr>
                  <tr>
                    <td>- Spread</td>
                    <td>- Free float</td>
                  </tr>
                  <tr>
                    <td>- Nền giá</td>
                    <td>- Mua – bán cực đại</td>
                  </tr>
                </table>
              </p>
              <p><span className="big-dot"></span>Tìm hiểu hành động của 3 thành phần chính tham gia thị trường chứng khoán: <br/>
                <table>
                  <tr>
                    <td>- Dealer</td>
                  </tr>
                  <tr>
                    <td>- Market maker</td>
                  </tr>
                  <tr>
                    <td>- Nhà đầu tư cá nhân</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              Buổi <span className="big-number"><span className="tab"></span>2</span>
            </div>
            <div className="item-content">
              <p><span className="big-dot"></span>Xác định xu hướng tăng giảm</p>
              <p><span className="big-dot"></span>Xác định xu hướng tăng giá bằng đường MA</p>
              <p><span className="big-dot"></span>Các xu hướng giá và khối lượng giao dịch </p>
              <p><span className="big-dot"></span>Xu hướng tăng giảm được tạo ra như thế nào?</p>
              <p><span className="big-dot"></span>Tìm hiểu 3 quy luật về giá và khối lượng</p>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              Buổi <span className="big-number"><span className="tab"></span>3</span>
            </div>
            <div className="item-content">
              <p><span className="big-dot"></span>Mô hình phân phối của cổ phiếu</p>
              <p><span className="big-dot"></span>Công thức điểm mua </p>
              <p><span className="big-dot"></span>Công thức bán cổ phiếu tối ưu </p>
              <p><span className="big-dot"></span>Thực hành lựa chọn cổ phiếu</p>
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
