import React from 'react'

import laptop from '../../assets/img/landingpage/laptop.png'

const Cover = () => {
  return (
    <section id="cover" className="section mt-0">
      <div className="header-blank"></div>
      <div className="py-5">
        {/* <div className="row stock-index justify-content-between font-weight-bold mb-4">
          <span>MSFT 207.35 <span className="up"><FontAwesomeIcon icon={faCaretUp}/></span> +1.36%</span>
          <span>AAPL 111.81 <span className="down"><FontAwesomeIcon icon={faCaretDown}/></span> -0.38%</span>
          <span>AMZN 3128.57 <span className="up"><FontAwesomeIcon icon={faCaretUp}/></span> +3.39%</span>
          <span>GOOGL 1459.26 <span className="up"><FontAwesomeIcon icon={faCaretUp}/></span> +1.05%</span>
          <span>BABA 275.23 <span className="up"><FontAwesomeIcon icon={faCaretUp}/></span> +0.01%</span>
          <span>FB 254.69 <span className="up"><FontAwesomeIcon icon={faCaretUp}/></span>	+0.97%</span>
        </div> */}
        <div>
          <div className="row">
            <div className="col-7 cover-img">
              <img src={laptop} alt="Stock diagram on laptop and mobile"/>
            </div>
            <div className="col-5 cover-content">
              <div className="row">
                <div className="col-8"><h2 className="eng-name uppercase"><b>TRUE INVEST</b></h2></div>
              </div>
              <div className="row justify-content-end mt-4">
                <div className="col-8"><h2 className="text-right viet-name uppercase">ĐẦU TƯ THẬT</h2></div>
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
    </section>
  )
}

export default Cover;
