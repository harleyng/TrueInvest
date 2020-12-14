import React from 'react'

import laptop from '../../assets/img/landingpage/laptop.png'

const Cover = () => {
  return (
    <section id="cover" className="section mt-0">
      <div className="container">
        <div className="py-5">
          <div>
            <div className="row">
              <div className="col-md-12 col-lg-7 cover-img text-center">
                <img src={laptop} alt="Stock diagram on laptop and mobile"/>
              </div>
              <div className="col-md-12 col-lg-5 cover-content">
                <div className="row">
                  <div className="col-sm-8 col-md-7 col-lg-11"><h2 className="eng-name uppercase"><b>TRUE INVEST</b></h2></div>
                </div>
                <div className="row justify-content-end mt-4">
                  <div className="col-sm-8 col-md-7 col-lg-11"><h2 className="text-right viet-name uppercase">ĐẦU TƯ THẬT</h2></div>
                </div>
                <div className="text-justify font-weight-bold">
                  <p>Hàng trăm nhà đầu tư đã chọn theo học phương pháp đầu tư của True Invest. 
                    Phương pháp của True Invest mang tính ứng dụng rất cao và chắc chắn sẽ là 
                    một trợ thủ đắc lực trên con đường chinh phục thành công của các nhà đâu tư. 
                  </p>
                  <p>Vậy bạn đã sẵn sàng trở thành nhà đầu tư thành công tiếp theo cùng trinh 
                    phục thành công với True Invest?
                  </p>
                  <div className="research-more"><button className="uppercase">TÌM HIỂU THÊM</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cover;
