import React from "react"
import Sort from "./Sort"

function Search({ onSearch, onSort }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => onSearch(event.target.value)}
      />
      <Sort onSort={onSort} />
    </div>
  )
}

export default Search
