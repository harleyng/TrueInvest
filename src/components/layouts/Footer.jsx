import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/fb-footer.png'
import youtube from '../../assets/img/yt-footer.png'
import $ from 'jquery'

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="container"> */}
        <div className="contact-wrap">
          <div className="container contact-content">
            <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6 left"><h1 className="uppercase">NHẬN NGAY TƯ VẤN MIỄN PHÍ</h1></div>
              <div className="col-sm-12 col-md-5 right">
                <button><b>ĐĂNG KÝ TƯ VẤN</b></button>
                <div className="row hotline-info">
                  <div className="col-1 col-md-2"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                  <div className="col-4 col-md-5">0364570081</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="conclusion">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <table className="information">
                <tr className="row justify-content-between">
                  <th className="row col-6"><div className="col-6"><img src={logo} className="logo" alt="True Invest - Đầu tư thật"/></div></th>
                  <th className="col-6"><div className="conlusion-contact"><h3 className="uppercase">LIÊN HỆ</h3></div></th>
                </tr>
                <tr className="row justify-content-between text-justify">
                  <td className="col-6"><p>True Invest - Đầu Tư Thật là đơn vị hoạt động trong lĩnh vực đào tạo 
                  và tư vấn đầu tư chứng khoán, cung cấp các khoá huấn luyện và tư vấn 
                  đầu tư chuyên nghiệp cho các nhà đầu tư trên thị trường.</p>
                  </td>
                  <td className="col-6">
                  <div className="">
                    <p><b>Địa chỉ:</b> LK10, TT3 Khu đô thị Đại Kim, 765 Nguyễn Xiển, Hoàng Mai, Hà Nội</p>
                    <p><b>Hotline:</b> 0364570081</p>
                    <div className="row">
                      <div className="col-2 pr-0"><a href="https://www.facebook.com/dautunhanha"><img src={facebook} alt="Facebook Icon"/></a></div>
                      <div className="col-2 pr-0"><a href="https://www.youtube.com/channel/UC0DzpK2m6rBI8upNcYEz2vA"><img src={youtube} alt="Youtube Icon"/></a></div>
                    </div>
                  </div>
                  </td>
                </tr>
              </table>
              <div className="footer-after">
                <div className="mb-5">
                  <div className="logo"><img src={logo} alt="True Invest - Đầu tư thật"/></div>
                  <p>True Invest - Đầu Tư Thật là đơn vị hoạt động trong lĩnh vực đào tạo 
                    và tư vấn đầu tư chứng khoán, cung cấp các khoá huấn luyện và tư vấn 
                    đầu tư chuyên nghiệp cho các nhà đầu tư trên thị trường.</p>
                </div>
                <div className="conlusion-contact mb-5">
                  <h3 className="uppercase text-center">LIÊN HỆ</h3>
                  <p><b>Địa chỉ:</b> LK10, TT3 Khu đô thị Đại Kim, 765 Nguyễn Xiển, Hoàng Mai, Hà Nội</p>
                  <p><b>Hotline:</b> 0364570081</p>
                  <div className="row mt-4">
                    <div className="col-2 pr-0"><a href="https://www.facebook.com/dautunhanha"><img src={facebook} alt="Facebook Icon"/></a></div>
                    <div className="col-2 pl-0"><a href="https://www.youtube.com/channel/UC0DzpK2m6rBI8upNcYEz2vA"><img src={youtube} alt="Youtube Icon"/></a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-plugin col-md-12 col-lg-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrueinvest.daututhat&tabs&width=280&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=771502006727396" 
                    title="True Invest - Đầu tư thật"
                    // width="100%" 
                    height="250" 
                    style={{border: "none", overflow: "hidden"}} 
                    scrolling="no" 
                    frameborder="0" 
                    allowTransparency="true" 
                    allow="encrypted-media">
            </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
