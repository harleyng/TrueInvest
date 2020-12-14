import React from 'react'
import facebookGray from '../../../assets/img/blog/facebook-gray.png'

const DailyHotArticle = props => {
  return (
    <a className="article-container" href="">
      <div className="article-wrap"
        style={{
          backgroundImage: `url(${props.bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%'
        }}
      >
        <div className="article-content">
          <h5 className="mb-3">{props.title}</h5>
          <div className="row">
            <div className="col-4 col-sm-3 col-lg-12"><div className="tag"><span>{props.tag}</span></div></div>
            <div className="facebook-share col-6 col-lg-12 row m-0">
                <div className="col-1 facebook-icon p-0 mr-1">
                  <img src={facebookGray} alt="Facebook Icon"/> 
                </div>
                <div className="">
                  {props.share} SHARES
                </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default DailyHotArticle
