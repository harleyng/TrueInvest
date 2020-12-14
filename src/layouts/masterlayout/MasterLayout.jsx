import React from 'react'
import Footer from '../../components/layouts/Footer'

const MasterLayout = (props) => {
  return (
    <div>
        <div className="">
        {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default MasterLayout;
