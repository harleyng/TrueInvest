import React from 'react'

import Cover from '../../components/blog/home/Cover'
import InvestmentOpinion from '../../components/blog/home/InvestmentOpinion'
import KnowledgeSummarization from '../../components/blog/home/KnowledgeSummarization'
import StockRating from '../../components/blog/home/StockRating'

const Blog = () => {
  return (
    <div className="blog">
      <Cover/>
      <KnowledgeSummarization/>
      <StockRating/>
      <InvestmentOpinion/>
    </div>
  )
}

export default Blog;
