import React from "react"

function Sort({ onSort }) {
  function handleChange(event) {
    onSort(event.target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="">None</option>
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
  )
}
export default Sort
