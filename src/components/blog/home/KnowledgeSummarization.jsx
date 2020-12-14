import React, { useState } from 'react'
import $ from 'jquery'
import List from './KnowledgeSummarization/List'

const KnowledgeSumarization = () => {
  const [listName, setlistName] = useState('SecuritiesInvestment')
  const changeList = e => {
    setlistName(e.target.value);

    let current = $(".active");
    current[0].className = current[0].className.replace("active", "");
    e.target.className += "active"
  }

  return (
    <div className="knowledge-summarization-wrap section">
      <div className="knowledge-summarization-content">
        <div className="section-title"><h1>kiến thức tổng hợp</h1></div>
        <div className="menu-container mx-5">
          <ul id="menu" className="d-flex justify-content-between">
            <li><button value="SecuritiesInvestment" className="active" onClick={changeList}>đầu tư chứng khoán</button></li>
            <li><button value="StockFilter" onClick={changeList}>lọc cổ phiếu</button></li>
            <li><button value="ReadReport" onClick={changeList}>đọc báo cáo tài chính</button></li>
            <li><button value="TechnicalAnalysis" onClick={changeList}>phân tích kĩ thuật</button></li>
          </ul>
        </div>
        <div className="articles-wrap">
          <div className="articles-content">
            <div className="container">
              <List listCategory={listName}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeSumarization;