import React from 'react'

import Cover from '../components/landingpage/Cover'
import About from '../components/landingpage/About'
import Course from '../components/landingpage/Course'
import Teacher from '../components/landingpage/Teacher'
import Testimonial from '../components/Testimonial'

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Cover/>
      <About/>
      <Course/>
      <Teacher/>
      <Testimonial/>
    </div>
  )
}

export default LandingPage;

