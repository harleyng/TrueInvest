import React from 'react'
import BenefitList1 from './list/BenefitList1'
import BenefitList2 from './list/BenefitList2'

const Benefit = () => {
  return (
    <div className="benefit section">
      <h1 className="section-title uppercase">SAU KHOÁ HỌC BẠN ĐƯỢC GÌ?</h1>
      <div className="row">
        <div className="col-4 content"><BenefitList1/></div>
        <div className="col-4 benefit-img"></div>
        <div className="col-4 content"><BenefitList2/></div>
      </div>
    </div>
  )
}

export default Benefit;
