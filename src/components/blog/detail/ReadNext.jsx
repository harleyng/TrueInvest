import React from 'react'
import article from '../../../assets/img/blog/category/daily-bg.jpg'
import ReadNextArticle from '../detail/ReadNextArticle'

const ReadNext = () => {
  const ReadNextArticles = [
    {
      id : 1,
      href : '',
      img : article,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      publicDate : 'tháng sau 4, 2020'
    },
    {
      id : 2,
      href : '',
      img : article,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      publicDate : 'tháng sau 4, 2020'
    },
    {
      id : 3,
      href : '',
      img : article,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      publicDate : 'tháng sau 4, 2020'
    },
    {
      id : 4,
      href : '',
      img : article,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      publicDate : 'tháng sau 4, 2020'
    },
    {
      id : 5,
      href : '',
      img : article,
      title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
      publicDate : 'tháng sau 4, 2020'
    },
  ]
  return (
    <div className="read-next">
      <div className="detail-article-related-next-title">
        <h5>read next</h5>
      </div>
      <div className="read-next-articles">
        {ReadNextArticles.map(item=> (
          <React.Fragment key={item._id}>
            <ReadNextArticle
              id = {item._id}
              href = {item.href}
              img = {item.img}
              title = {item.title}
              publicDate = {item.publicDate}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ReadNext
