import React from 'react'
import TargetStudentList from './list/TargetStudentList'

const TargetStudent = () => {
  return (
    <div className="khoa-hoc-danh-cho-ai section">
      <h1 className="section-title uppercase">KHOÁ HỌC DÀNH CHO AI?</h1>
      <div className="container">
        <div className="row justify-content-between">
          <TargetStudentList/>
        </div>
      </div>
    </div>
  )
}

export default TargetStudent;
