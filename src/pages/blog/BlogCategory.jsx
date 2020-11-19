import React, { useEffect } from 'react'
import SearchBar from '../../components/blog/SearchBar'
import NewestArticles from '../../components/blog/NewestArticles'
import HighlightArticles from '../../components/blog/HighlightArticles'
import Tag from '../../components/blog/Tag'
import DaiLyHotArticle from '../../components/blog/item/DailyHotArticle'
import dailyBg from '../../assets/img/blog/category/daily-bg.jpg'
import Articles from '../../components/blog/category/Articles'

import $ from 'jquery'

const styles = {
  root: {
    color:'#50a05c !important',
  }
};

const BlogCategory = props => {
  const category = props.match.params.category;
  const DaiLyHotAritcles = [
    {
      id : 1,
      href : '',
      bg : dailyBg,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      tag : 'thị trường',
      share : 3
    },
    {
      id : 2,
      href : '',
      bg : dailyBg,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      tag : 'thị trường',
      share : 3
    },
    {
      id : 3,
      href : '',
      bg : dailyBg,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      tag : 'thị trường',
      share : 3
    },
    {
      id : 4,
      href : '',
      bg : dailyBg,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      tag : 'thị trường',
      share : 3
    },
    {
      id : 5,
      href : '',
      bg : dailyBg,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      tag : 'thị trường',
      share : 3
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      let top = $('.navbar2').height() + 60;
      $('.blog-category .blog-side-menu').height($('.articles-container').height())
      $('.sticky-part').css('top', top);
    }, 2000);
  }, [])
  return (
    <div className="blog-category">
      <div className="category-name">
        <h1>{category}</h1>
      </div>
      <div className="daily-hot-articles d-flex">
        {DaiLyHotAritcles.map(item=>(
          <React.Fragment key = {item._id}>
            <DaiLyHotArticle
              id = {item._id}
              href = {item.href}
              bg = {item.bg}
              title = {item.title}
              tag = {item.tag}
              share = {item.share}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="row mb-5 align-items-start" style={{position:"relative"}}>
        <div className="col-8 articles-container p-0">
          <Articles/>
        </div>
        <div className="col-4 blog-side-menu">
          <nav className="sticky-top sticky-part">
            <SearchBar/>
            <div className="facebook-fanpage blog-side-menu-section">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrueinvest.daututhat&tabs&width=390&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=771502006727396" 
                      title="True Invest - Đầu tư thật"
                      width="400px"
                      data-width="400px" 
                      // height="250" 
                      style={{border: "none", overflow: "hidden"}} 
                      scrolling="no" 
                      frameborder="0" 
                      allowTransparency="true" 
                      allow="encrypted-media">
              </iframe>
            </div>
            <NewestArticles/>
            <HighlightArticles/>
            <Tag/>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BlogCategory
