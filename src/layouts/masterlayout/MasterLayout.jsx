import React from 'react'
import Footer from '../../components/layouts/Footer'

const MasterLayout = (props) => {
  return (
    <div>
        <div className="mainContent">
        {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default MasterLayout;
