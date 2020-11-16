import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import List from './testimonial/List'

const Testimonial = () => {
  return (
    <section id="testimonial" className="section">
      <div className="container">
        <div className="testimonial">
          <OwlCarousel
            className="owl-theme"
            items={1}
            loop
            margin={10}
            mouseDrag
            touchDrag
            dots
            // animateIn
          >
            <List></List>
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;