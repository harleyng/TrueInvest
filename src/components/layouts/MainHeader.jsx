import React, { useEffect } from 'react'
import useResizeAware from 'react-resize-aware';

import logo from '../../assets/img/logo.png'
import $ from 'jquery'

const Header = () => {
  const [resizeListener, sizes] = useResizeAware();
  useEffect(() => {
    $('.header-blank').css("margin-top", sizes.height);
  }, [sizes.height])

  return (
    <nav className="main-header">
      {resizeListener}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <ul className="row text-center title">
              <a className="col-4" href="#about"><li className="uppercase">về chúng tôi</li></a>
              <a className="col-4" href="#course"><li className="uppercase">khoá học</li></a>
              <a className="col-4" href="#teacher"><li className="uppercase">giảng viên</li></a>
            </ul>
          </div>
          <div className="col-2 logo">
            <img src={logo} alt="logo True Invest - Đầu Tư Thật"/>
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
  )
}

export default Header;
