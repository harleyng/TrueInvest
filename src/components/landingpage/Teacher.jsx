import React from 'react'

import twitterTeacher from '../../assets/img/landingpage/twitter-teacher.png';
import facebookTeacher from '../../assets/img/landingpage/fb-teacher.png';
import skypeTeacher from '../../assets/img/landingpage/skype-teacher.png';
import teacher1 from '../../assets/img/landingpage/teacher1.png'
import teacher2 from '../../assets/img/landingpage/teacher2.png'

const Teacher = () => {
  return (
    <section id="teacher" className="section">
      {/* <div className="header-blank"></div> */}
      <div className="container section-title">
        <h3 className="uppercase"><span>GIẢNG VIÊN</span></h3>
      </div>
      <div className="teacher1">
        <div className="row">
          <div className="col-6 teacher-content-wrap">
              <div className="teacher-content">
                <h1 className="highlight">Anh Nguyễn Hồng Đức</h1>
                <h3><span>Co-Founder</span> True Invest</h3>
                <div className="text-justify">
                  <p>Anh Nguyễn Hồng Đức - Founder đầu tiên của Đầu tư Thật – True Invest.
                    Từng là một cử nhân tài chính tại Đại học Ngoại Thương, ngay từ khi 
                    còn là sinh viên, anh đã làm việc tại Tập đoàn Tài chính HungKee Việt Nam 
                    với vai trò Phó phòng Phân tích và Đầu tư.
                  </p>
                  <p>Với gần 10 năm kinh nghiệm đầu tư trên thị trường chứng khoán, và phương 
                    pháp giảng dạy khoa học, dễ hiểu và hiệu quả, anh đã giúp hàng nghìn nhà 
                    đầu tư có được phương pháp đúng đắn và chiến lược phù hợp trên thị trường 
                    chứng khoán
                  </p>
                </div>
                <div className="d-flex teacher-contact">
                  <div className="teacher-social-logo"><img src={twitterTeacher} alt="Twitter Icon"/></div>
                  <div className="teacher-social-logo"><img src={facebookTeacher} alt="Facebook Icon"/></div>
                  <div className="teacher-social-logo"><img src={skypeTeacher} alt="Skype Icon"/></div>
                </div>
              </div>
            </div>
            <div className="col-6 teacher2-img teacher-img">
              <img src={teacher2} alt="Anh Đinh Quang Anh"/>
            </div>
        </div>
      </div>
      <div className="teacher2">
        <div className="row">
        <div className="col-6 teacher-img teacher1-img">
            <img src={teacher1} alt="Anh Đinh Quang Anh"/>
          </div>
          <div className="col-6 teacher-content-wrap">
            <div className="teacher-content">
              <h1 className="highlight">Anh Đinh Quang Anh</h1>
              <h3><span>Co-Founder</span> True Invest</h3>
              <div className="text-justify">
                <p>Anh Đinh Quang Anh là một trong những Co-Founder 
                  của Đầu tư Thật – True Invest. Anh tốt nghiệp cử nhân 
                  xuất sắc hai trường Đại học nổi tiếng là Đại học Luật
                  Hà Nội và Học viện Âm nhạc Quốc Gia Việt Nam. Anh đã 
                  tích lũy cho mình hơn 5 năm kinh nghiệm đầu tư trên thị 
                  trường chứng khoán, Bitcoin, Forex. </p>
                <p>Bên cạnh đó anh đã từng là Chuyên viên Phòng Phân tích 
                  Chứng khoán của một Học viện Đầu tư Tài chính tại Hà Nội. 
                  Với phương pháp giảng dạy dựa trên cơ sở khoa học kết hợp 
                  thực tiễn, anh đã đào tạo được hơn 500+ nhà đầu tư trên khắp 
                  Việt Nam.</p>
              </div>
              <div className="d-flex teacher-contact">
                <div className="teacher-social-logo"><img src={twitterTeacher} alt="Twitter Icon"/></div>
                <div className="teacher-social-logo"><img src={facebookTeacher} alt="Facebook Icon"/></div>
                <div className="teacher-social-logo"><img src={skypeTeacher} alt="Skype Icon"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teacher;
