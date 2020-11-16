import React from 'react'

import Cover from '../../components/course/SideCourse/dividend-investment/Cover'
import TargetStudent from '../../components/course/SideCourse/dividend-investment/TargetStudent'
import CourseContent from '../../components/course/SideCourse/dividend-investment/CourseContent'
import Benefit from '../../components/course/SideCourse/dividend-investment/Benefit'
import Price from '../../components/course/SideCourse/dividend-investment/Price'
import Testimonial from '../../components/Testimonial'

const DividendInvestmennt = () => {
  return (
    <div className="dividend-investment">
      <Cover/>
      <TargetStudent/>
      <CourseContent/>
      <Benefit/>
      <Price/>
      <Testimonial/>
    </div>
  )
}

export default DividendInvestmennt;
