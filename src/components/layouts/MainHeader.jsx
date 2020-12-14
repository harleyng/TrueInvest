import React, { useState, useEffect } from 'react'
import useResizeAware from 'react-resize-aware';
import logo from '../../assets/img/logo.png'
import $ from 'jquery'
import MenuIcon from './MenuIcon';

const Header = () => {
  const [resizeListener, sizes] = useResizeAware();
  const [HeaderOpened, setHeaderOpened] = useState(true)
  useEffect(() => {
    $('.header-blank').css("margin-top", sizes.height);
  }, [sizes.height])

  const HeaderToggler = () => {
    setHeaderOpened(!HeaderOpened); 
    $('.main-header-after-list').slideToggle("fast");
    if (HeaderOpened === true) {
      $('.main-header-after')[0].className += ' opened';
    } else {
      $('.main-header-after')[0].className = $('.main-header-after')[0].className.replace(' opened', '');
    }
  } 

  return (
    <header>
      <nav className="main-header">
        {resizeListener}
        <div className="container">
          <div className="row">
            <div className="col-5">
              <ul className="row text-center title">
                <a className="col-4" href="/home/#about"><li className="uppercase">về chúng tôi</li></a>
                <a className="col-4" href="/home/#course"><li className="uppercase">khoá học</li></a>
                <a className="col-4" href="/home/#teacher"><li className="uppercase">giảng viên</li></a>
              </ul>
            </div>
            <div className="col-2 logo">
              <a href="/home"><img src={logo} alt="logo True Invest - Đầu Tư Thật"/></a>
            </div>
            <div className="col-5">
              <ul className="row text-center title">
                <a className="col-4" href="/blog"><li className="uppercase">blog</li></a>
                <a className="col-4" href="#"><li className="uppercase">học viên</li></a>
                <a className="col-4" href="#"><li className="uppercase">liên hệ</li></a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="main-header-after">
        <div className="toggler"><button onClick={HeaderToggler}><MenuIcon/></button></div>
        <div className="main-header-after-list">
              <ul className="">
                <a className="" href="/home/#about"><li className="uppercase">về chúng tôi</li></a>
                <a className="" href="/home/#course"><li className="uppercase">khoá học</li></a>
                <a className="" href="/home/#teacher"><li className="uppercase">giảng viên</li></a>
                <a className="" href="/blog"><li className="uppercase">blog</li></a>
                <a className="" href="#"><li className="uppercase">học viên</li></a>
                <a className="" href="#"><li className="uppercase">liên hệ</li></a>
              </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
