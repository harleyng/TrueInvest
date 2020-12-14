import React from 'react'
import TheBestInClassList from './list/TheBestInClassList'

const TheBestInClass = () => {
  return (
    <div className="the-best-in-class section">
      <h1 className="section-title uppercase">THE BEST IN CLASS</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 the-best-in-class-img"></div>
          <div className="col-12 col-lg-5 the-best-in-class-content">
            <TheBestInClassList/>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="leaf-button">đăng ký ngay</button>
      </div>
    </div>
  )
}

export default TheBestInClass;
