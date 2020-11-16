import React from 'react'
import BenefitList from './list/BenefitList'

const Benefit = () => {
  return (
    <div className="benefit section">
      <h1 className="section-title">sau khoá học bạn được gì?</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 img"></div>
          <div className="col-6 content">
            <BenefitList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit;
