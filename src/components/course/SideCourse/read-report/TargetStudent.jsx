import React from 'react'

const TargetStudent = () => {
  return (
    <div className="target-student section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-6 content">
            <h1 className="section-title mb-5">khoá học dành cho ai?</h1>
            <div className="container px-5">
              <div className="first item">
                <h1>1</h1>
                <p>Nhà đầu tư chưa có kinh nghiệm, đang tìm hiểu về chứng khoán cơ bản</p>
              </div>
              <div className="second item">
                <h1>2</h1>
                <p>Nhà đầu tư không có nền tảng về tài chính, muốn học cách đọc báo cáo tài chính theo cách dễ hiểu để đầu tư</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TargetStudent;
