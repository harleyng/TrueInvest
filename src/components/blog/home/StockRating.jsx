import React from 'react'
import List from './StockRating/List'

const StockRating = () => {
  return (
    <div className="stock-rating section">
      <div className="section-title"><h1>đánh giá cổ phiếu</h1></div>
      <div className="articles container">
        <List/>
      </div>
    </div>
  )
}

export default StockRating
