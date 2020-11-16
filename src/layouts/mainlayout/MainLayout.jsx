import React from 'react'
import Header from '../../components/layouts/MainHeader'

const MainLayout = (props) => {
  return (
    <div>
      <Header/>
        <div className="mainContent">
        {props.children}
        </div>
    </div>
  )
}

export default MainLayout;