import React from 'react'

import Cover from '../../components/course/SideCourse/read-report/Cover'
import TargetStudent from '../../components/course/SideCourse/read-report/TargetStudent'
import CourseContent from '../../components/course/SideCourse/read-report/CourseContent'
import Benefit from '../../components/course/SideCourse/read-report/Benefit'
import Price from '../../components/course/SideCourse/read-report/Price'
import Testimonial from '../../components/Testimonial'

const ReadReport = () => {
  return (
    <div className="read-report">
      <Cover/>
      <TargetStudent/>
      <CourseContent/>
      <Benefit/>
      <Price/>
      <Testimonial/>
    </div>
  )
}

export default ReadReport;
