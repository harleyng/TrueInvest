import React, { useState, useEffect, useRef } from 'react'
import { faUserCircle, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery';

import logo from '../../assets/img/logo.png'
import youtube from '../../assets/img/blog/blog-header-youtube-logo.png'
import facebook from '../../assets/img/blog/blog-header-facebook-logo.png'

const Header = () => {
  const [ShowModal, setShowModal] = useState(false);
  const modal = useRef(null);
  const stickyHeader = useRef(null);

  const openModal = () => {
    setShowModal(true);
    $('.login-modal, .account-icon, .close-icon').toggle();
  }
  
  const handleClickOutSide = (e) => {
    if (modal.current && ShowModal === true && !modal.current.contains(e.target)) {
      $('.login-modal, .account-icon, .close-icon').toggle();
      setShowModal(false);
    }
  }

  useEffect(() => {
    const sticky = stickyHeader.current.offsetTop;
    const handleScroll = (e) => {
      if (window.pageYOffset >= sticky) {
        if (!(stickyHeader.current.className.includes("sticky"))) {
          stickyHeader.current.className += " sticky";
        }
      } else {
        stickyHeader.current.className = stickyHeader.current.className.replace("sticky", "");
      }
    }
    window.addEventListener("mousedown", handleClickOutSide);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [modal, ShowModal])
  
  return (
    <div className="blog-header">
      <div className="row justify-content-between navbar1">
        <div className="col-4">
          <div className="row">
            <div className="col-2 login">
              <div className="">
                <button className="icon account-icon" onClick={openModal}><FontAwesomeIcon icon={faUserCircle}/></button>
                <button className="icon pl-2 close-icon"><FontAwesomeIcon icon={faTimes}/></button>
              </div>
              <div className="login-modal" ref={modal}>
                <form action="" method="post">
                  <div>
                    <label htmlFor="username">Tên đăng nhập</label>
                    <input type="text" name="username" id="username"/>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="text" name="password" id="password"/>
                  </div>
                  <div className="mt-3">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label className="ml-2" htmlFor="remember">Tự động đăng nhập</label>
                  </div>
                  <div className="text-center mt-3 mb-2"><button type="submit">đăng nhập</button></div>
                </form>
                <a href="#" className="forget-pw"><span>Quên Mật Khẩu?</span></a>
              </div>
            </div>
            <div className="col-10 search-bar p-0">
              <span className="icon">
                <FontAwesomeIcon icon={faSearch}/>
              </span>
              <div className="search-input">
                <input type="search" placeholder="Nhập từ khoá"></input>
                <button id="search-trigger">Tìm Kiếm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 logo text-center"><img src={logo} className="logo" alt="True Invest - Đầu tư thật"/></div>
        <div className="col-4">
          <div className="row justify-content-end">
            <div className="col-3 vertical-center">Khoá Học</div>
            <div className="col-3">Liên Hệ</div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between navbar2 m-0" ref={stickyHeader}>
        <ul className="col-9 d-flex title">
          <li><a><h5 className="item">home</h5><span className="triangle"></span></a></li>
          <li><a><h5 className="item">kiến thức</h5><span className="triangle"></span></a></li>
          <li><a><h5 className="item">đánh giá cổ phiếu</h5><span className="triangle"></span></a></li>
          <li><a><h5 className="item">quan điểm về đầu tư</h5><span className="triangle"></span></a></li>
          <li><a><h5 className="item">về true invest</h5><span className="triangle"></span></a></li>
        </ul>
        <div className="col-2">
          <div className="row justify-content-end">
            <div className="col-3 icon p-0 text-right"><img src={youtube} alt="Youtube Icon"/></div>
            <div className="col-3 icon p-0 text-center"><img src={facebook} alt="Facebook Icon"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

