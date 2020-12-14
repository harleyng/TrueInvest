import React from 'react'
import $ from 'jquery'

const MenuIcon = () => {
  const ClickHandle = () => {
    $('#menu-icon')[0].classList.toggle("change");
  }
  return (
    <div id="menu-icon" onClick={ClickHandle}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}

export default MenuIcon
