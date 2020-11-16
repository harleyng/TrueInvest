import React from 'react'
import Benefit from '../../components/course/MainCourse/investor/Benefit'
import CourseContent from '../../components/course/MainCourse/investor/CourseContent'
import Cover from '../../components/course/MainCourse/investor/Cover'
import TargetStudent from '../../components/course/MainCourse/investor/TargetStudent'
import TheBestInClass from '../../components/course/MainCourse/investor/TheBestInClass'
import TimeAndPrice from '../../components/course/MainCourse/investor/TimeAndPrice'
import Testimonial from '../../components/Testimonial'

const Investor = () => {
  return (
    <div className="investor">
      <Cover/>
      <TheBestInClass/>
      <TargetStudent/>
      <CourseContent/>
      <Benefit/>
      <TimeAndPrice/>
      <Testimonial/>
    </div>
  )
}

export default Investor;
