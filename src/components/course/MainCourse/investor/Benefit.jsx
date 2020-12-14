import React from 'react'
import BenefitList1 from './list/BenefitList1'
import BenefitList2 from './list/BenefitList2'

const Benefit = () => {
  return (
    <div className="benefit section">
      <h1 className="section-title uppercase">SAU KHOÁ HỌC BẠN ĐƯỢC GÌ?</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 content">
            <div className="row">
              <BenefitList1/>
            </div>
          </div>
          <div className="col-12 col-lg-4 benefit-img"></div>
          <div className="col-12 col-lg-4 content">
            <div className="row">
              <BenefitList2/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit;
