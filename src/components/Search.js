import React from "react"

function Search({ onSearch }) {
  /// pass in prop of callback to update state in console.log below

  // function handlePlantSearch(event) {
  //   console.log(event.target.value)
  // }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  )
}

export default Search
