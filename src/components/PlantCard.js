import React, { useState } from "react"

function PlantCard({ plant, onDelete }) {
  const { id, name, image, price } = plant
  const [isINStock, setIsInStock] = useState(true)

  function handleStockClick() {
    setIsInStock(!isINStock)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(id))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isINStock ? (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  )
}

export default PlantCard
