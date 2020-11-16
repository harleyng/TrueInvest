import React from 'react'

const Course = () => {
  return (
    <section id="course" className="section">
      <div className="header-blank"></div>
      <div className="container">
        <div className="text-center section-title">
          <h3 className="uppercase"><span>CÁC KHOÁ HỌC</span></h3>
        </div>
        <div className="course-content">
          <div className="row">
            <div className="col-3">
              <div className="course-item">
                <div className="read-financial-report">
                  <div className="skew">
                    <div className="inv-skew uppercase">ĐỌC HIỂU BÁO CÁO TÀI CHÍNH</div>
                  </div>
                </div>
                <div className="px-3 mt-3">
                  <b className="uppercase">ĐỌC HIỂU BÁO CÁO TÀI CHÍNH</b>
                  <div className="course-item-content my-4">
                    <p className="text-justify">Khóa học Đọc hiểu báo cáo tài chính: Giúp nhà đầu tư tìm hiểu 
                      được thông tin và nhận biết được đâu là cổ phiếu tốt</p>
                  </div>
                  <a href="/course/read-report" target="#" className="course-button"><button className="uppercase">TÌM HIỂU THÊM</button></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="course-item">
                <div className="invest-gain-dividend">
                  <div className="skew">
                    <div className="inv-skew uppercase">ĐẦU TƯ HƯỞNG CỔ TỨC</div> 
                  </div>
                </div>
                <div className="px-3 mt-3">
                  <b className="uppercase">ĐẦU TƯ HƯỞNG CỔ TỨC</b>
                  <div className="course-item-content my-4">
                    <p className="text-justify">Khóa học Đầu tư cổ tức giúp bạn có thể có lợi nhuận 10 - 15%/năm 
                      mà không biết nhiều thời gian theo dõi bảng giá</p>
                  </div>
                  <a href="/course/dividend-investment" target="#" className="course-button"><button className="uppercase">TÌM HIỂU THÊM</button></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="course-item">
                <div className="investor">
                  <div className="skew">
                    <div className="inv-skew uppercase">INVESTOR</div>
                  </div>
                </div>
                <div className="px-3 mt-3">
                  <b className="uppercase">INVESTOR</b>
                  <div className="course-item-content my-4">
                    <p className="text-justify">Khóa học Investor – Tìm kiếm Cổ phiếu tăng x2, x3 từ 2 - 3 năm.</p>
                  </div>
                  <a href="/course/investor" target="#" className="course-button"><button className="uppercase">TÌM HIỂU THÊM</button></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="course-item">
                <div className="pro-trader-20">
                  <div className="skew">
                    <div className="inv-skew uppercase">PRO TRADER 20</div>
                  </div>
                </div>
                <div className="px-3 mt-3">
                  <b className="uppercase">PRO TRADER 20</b>
                  <div className="course-item-content my-4">
                    <p className="text-justify">Khóa học Protrader 20 – Tìm cổ phiếu tăng 20 - 30% trong 6 - 8 tuần</p>
                  </div>
                  <a href="/course/protrader20" target="#" className="course-button"><button className="uppercase">TÌM HIỂU THÊM</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course;