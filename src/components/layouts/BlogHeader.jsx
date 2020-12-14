import React, { useState, useEffect, useRef } from 'react'
import { faUserCircle, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery';
import { IoIosArrowDown } from 'react-icons/io'
import logo from '../../assets/img/logo.png'
import youtube from '../../assets/img/blog/blog-header-youtube-logo.png'
import facebook from '../../assets/img/blog/blog-header-facebook-logo.png'

const Header = () => {
  // Login Modal
  const [ShowModal, setShowModal] = useState(false);
  const modal = useRef(null);
  const stickyHeader = useRef(null);
  const openModal = () => {
    setShowModal(true);
    $('.login-modal, .account-icon, .close-icon').toggle();
  }

  // Side Menu After 992px
  const [HeaderOpened, setHeaderOpened] = useState(false)
  const header = useRef(null)

  const HeaderToggler = () => {
    $('.menu, .closer, .overlay').toggle();
    $('html, body').css('overflow', 'hidden')
    setHeaderOpened(true);
  }

  // Search Modal
  const [SearchOpened, setSearchOpened] = useState(false)
  const search = useRef(null)

  const searchModalToggler = () => {
    $('.search-bar-modal').slideToggle();
    $('.close-search, #search-button').toggle();
    setSearchOpened(true);
  }

  // Click Outside
  const handleClickOutSide = (e) => {
    if (modal.current && ShowModal === true && !modal.current.contains(e.target)) {
      $('.login-modal, .account-icon, .close-icon').toggle();
      setShowModal(false);
    }

    if (header.current && HeaderOpened === true && !header.current.contains(e.target)) {
      $('.menu, .closer, .overlay').toggle();
      $('html, body').css('overflow', 'auto')
      setHeaderOpened(false);
    }

    if (search.current && SearchOpened === true && !search.current.contains(e.target)) {
      $('.search-bar-modal').slideToggle();
      $('.close-search, #search-button').toggle();
      setSearchOpened(false);
    }
  }

  // Dropdown
  const handleDropDown = () => {
    $('.blog-header-after .menu .title .dropdown ul').slideToggle();
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
  }, [modal, ShowModal, HeaderOpened, SearchOpened])
  
  return (
    <div style={{position: 'relative', height:'100%'}}>
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
              <div className="col-4 col-xl-3 vertical-center">Khoá Học</div>
              <div className="col-4 col-xl-3">Liên Hệ</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between navbar2 m-0" ref={stickyHeader}>
          <ul className="col-11 d-flex title">
            <li><a><h5 className="item">home</h5><span className="triangle"></span></a></li>
            <li className="dropdown-toggler">
              <a>
                <h5 className="item">kiến thức</h5>
                <span className="ml-2"><IoIosArrowDown size={20}/></span>
                <ul>
                  <a href="#"><li>đầu tư chứng khoán</li></a>
                  <a href="#"><li>lọc cổ phiếu</li></a>
                  <a href="#"><li>đọc báo cáo tài chính</li></a>
                  <a href="#"><li>phân tích kĩ thuật</li></a>
                </ul>
                <span className="triangle"></span>
              </a>
            </li>
            <li><a><h5 className="item">đánh giá cổ phiếu</h5><span className="triangle"></span></a></li>
            <li><a><h5 className="item">quan điểm về đầu tư</h5><span className="triangle"></span></a></li>
            <li><a><h5 className="item">về true invest</h5><span className="triangle"></span></a></li>
          </ul>
          <div className="col-1">
            <div className="row justify-content-end social-icon-wrap">
              <div className="col-3 icon p-0 mr-2"><img src={youtube} alt="Youtube Icon"/></div>
              <div className="col-3 icon p-0"><img src={facebook} alt="Facebook Icon"/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-header-after">
        <div className="container">
          <div className="row">
            <button className="header-toggler col-3" onClick={HeaderToggler}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <div className="logo col-6"><img src={logo} alt="True Invest - Đầu tư thật"/></div>
            <div className="col-3 search-bar-toggler">
              <button id="search-button" onClick={searchModalToggler}><FontAwesomeIcon icon={faSearch}/></button>
              <button className="pl-2 close-search"><FontAwesomeIcon icon={faTimes}/></button>
            </div>
          </div>
        </div>
          <nav className="menu" ref={header}>
            <div className="logo"><img src={logo} alt="True Invest - Đầu tư thật"/></div>
            <div className="d-flex social-icon-wrap">
              <div className="icon mr-2"><img src={youtube} alt="Youtube Icon"/></div>
              <div className="icon"><img src={facebook} alt="Facebook Icon"/></div>
            </div>
            <ul className="title">
              <li><a><h5 className="item">home</h5></a></li>
              <li className="dropdown">
                <div className="row justify-content-between">
                  <a className="col-6"><h5 className="item" style={{display: 'inline-block'}}>kiến thức</h5></a>
                  <button onClick={handleDropDown} className="p-0 col-1 dropdown-toggler-icon mr-4"><IoIosArrowDown size={20}/></button>
                </div>
                <ul>
                  <a href="#"><li>đầu tư chứng khoán</li></a>
                  <a href="#"><li>lọc cổ phiếu</li></a>
                  <a href="#"><li>đọc báo cáo tài chính</li></a>
                  <a href="#"><li>phân tích kĩ thuật</li></a>
                </ul>
              </li>
              <li><a><h5 className="item">đánh giá cổ phiếu</h5></a></li>
              <li><a><h5 className="item">quan điểm về đầu tư</h5></a></li>
              <li><a><h5 className="item">về true invest</h5></a></li>
            </ul>
            <ul className="bonus-title">
              <li><a><h5 className="item">khoá học</h5></a></li>
              <li><a><h5 className="item">liên hệ</h5></a></li>
            </ul>
          </nav>
          <button className="closer"><div>x</div></button>
          <div className="search-bar-modal" ref={search}>
            <div className="container">
              <div className="search-bar-wrap">
                <input type="search" placeholder="Nhập từ khoá"></input>
                <button className="search-button"><FontAwesomeIcon icon={faSearch}/></button>
              </div>
            </div>
          </div>
        </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Header;

