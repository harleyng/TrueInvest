import React from 'react'
import Benefit from '../../components/course/MainCourse/protrader/Benefit'
import CourseContent from '../../components/course/MainCourse/protrader/CourseContent'
import Cover from '../../components/course/MainCourse/protrader/Cover'
import TargetStudent from '../../components/course/MainCourse/protrader/TargetStudent'
import TheBestInClass from '../../components/course/MainCourse/protrader/TheBestInClass'
import TimeAndPrice from '../../components/course/MainCourse/protrader/TimeAndPrice'
import Testimonial from '../../components/Testimonial'

const Protrader = () => {
  return (
    <div className="protrader">
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

export default Protrader;
