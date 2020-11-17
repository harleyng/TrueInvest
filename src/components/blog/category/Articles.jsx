import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/es/PaginationItem'
import Article from './Article'

// Custom theme for pagination
const useStyles = makeStyles((theme) =>({
  root: {
    color: '#50a05c !important',
    "& > *": {
      justifyContent:"center",
      display:'flex'
    }
  },
  }),
);

const articles = [
  {
    id : 1,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 2,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 3,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 4,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 5,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 5,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 6,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 7,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 8,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 9,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 10,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 11,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 12,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
  {
    id : 13,
    href : '',
    img : 'https://loremflickr.com/360/240',
    title : 'Dịch Covid-19 và hiệu ứng Domino sụp đổ của các ngành công nghiệp',
    publicDate : 'tháng tám 12, 2020',
    view : '340',
    briefDesc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit natus incidunt amet asperiores.'
  },
]

const Articles = () => {
  const classes = useStyles();

  // Handle page change
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Logic for displaying current page
  const articlePerPage = 10;
  const lastArticle = page * articlePerPage;
  const firstArticle = lastArticle - articlePerPage;
  const currentArticles = articles.slice(firstArticle, lastArticle);

  return (
    <div>
      <div className="articles">
        {currentArticles.map((article, index) => (
          <React.Fragment key={article._id}>
            <Article
              id = {index}
              img = {article.img}
              href = {article.href}
              title = {article.title}
              publicDate = {article.publicDate}
              view = {article.view}
              briefDesc = {article.briefDesc}
            />
          </React.Fragment>
        ))}
      </div>
      <div className={classes.root} id="pagination" style={{clear:"both"}}>
        <Pagination
          count={4} 
          page={page} 
          variant="outlined" 
          onChange={handleChange}
          renderItem={(item)=> <PaginationItem {...item} className={classes.root}/> }
        />
      </div>
    </div>
  )
}

export default Articles