import React from 'react'

import courseImg from '../../assets/img/landingpage/course-img.png';
import communityImg from '../../assets/img/landingpage/community-img.png';
import documentStorageImg from '../../assets/img/landingpage/document-storage-img.png';

const About = () => {
  return (
    <section id="about" className="section">
      {/* <div className="header-blank"></div> */}
      <div className="brief-description">
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-6 brief-description-content font-weight-bold text-justify">
              <div>
                <h2 className="uppercase"><b>TRUE INVEST</b></h2>
                <h4 className="uppercase"><b>CỘNG ĐỒNG ĐẦU TƯ THẬT</b></h4>
              </div>
              <div className="mt-4 mb-5">
                <p><span className="highlight">True Invest - Đầu Tư Thật</span> là đơn vị hoạt động trong lĩnh vực đào tạo và tư vấn đầu tư chứng khoán, cung cấp các khoá huấn luyện và tư vấn đầu tư chuyên nghiệp cho các nhà đầu tư trên thị trường.</p>
                <p>Với phương châm học viên là trung tâm trong quá trình đào tạo, True Invest tự hào là đơn vị <span className="highlight">DUY NHẤT</span> sẵn sàng sử dụng kết quả đầu tư của các học viện làm tiêu chuẩn của chất lượng sản phẩm.</p>
                <p>Bằng phương pháp đầu tư riêng biệt, True Invest mong muốn tạo lập một <span className="highlight">CỘNG ĐỒNG ĐẦU TƯ THẬT</span> cho những nhà đầu tư với phương pháp dễ dàng tiếp cận nhưng vẫn mang hiệu quả cao.</p>
              </div>
            </div>
            <div className="col-6 brief-description-img p-0"></div>
          </div>
        </div>
      </div>
      <div className="detail-description container">
        <div className="text-center section-title">
          <h3 className="uppercase"><span>TRỞ THÀNH NHÀ ĐẦU TƯ THÔNG MINH CÙNG TRUE INVEST</span></h3>
        </div>
        <div className="detail-description-content px-5">
          <div className="d-flex justify-content-between">
            <div className="detail-description-section">
              <div className="detail-description-content-logo course-img">
                <img src={courseImg} alt="Course Logo"/>
              </div>
              <div className="text-center detail-description-section-title">
                <h4 className="uppercase">KHOÁ HỌC</h4>
              </div>
              <p className="text-justify mt-4">Cung cấp kiến thức, kỹ năng và phương pháp đầu tư chứng khoán 
                thông qua các khóa học với các nội dung chuyên sâu và cấp độ 
                lợi nhuận tăng dần.</p>
            </div>
            <div className="detail-description-section">
              <div className="detail-description-content-logo community-img">
                <img src={communityImg} alt="Community Logo"/>
              </div>
              <div className="text-center detail-description-section-title">
                <h4 className="uppercase">CỘNG ĐỒNG</h4>
              </div>
              <p className="text-justify mt-4">Tạo lập một cộng đồng kết nối các nhà đầu tư cá nhân trên 
                thị trường chứng khoán, chia sẻ kiến thức, kinh nghiêm và 
                các cơ hội đầu tư.</p>
            </div>
            <div className="detail-description-section">
              <div className="detail-description-content-logo document-storage-img">
                <img src={documentStorageImg} alt="Document Storage Logo"/>
              </div>
              <div className="text-center detail-description-section-title">
                <h4 className="uppercase">KHO TÀI LIỆU</h4>
              </div>
              <p className="text-justify mt-4">Kho tài liệu miễn phí bao gồm các Clip và nội dung về lý 
                thuyết đầu tư, kinh nghiệm đầu tư thực tế, nhận định thị 
                trường và vấn đề nổi bật của TTCK.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;