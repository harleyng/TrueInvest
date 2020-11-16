import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  return (
    <div className="search-bar blog-side-menu-section">
      <input type="search" placeholder="Nhập từ khoá"></input>
      <button id="search-button"><FontAwesomeIcon icon={faSearch}/></button>
    </div>
  )
}

export default SearchBar
