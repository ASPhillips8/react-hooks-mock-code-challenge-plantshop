import React, { useState } from "react"
import PlantPrice from "./PlantPrice"

function PlantCard({ plant, onDelete, onPriceChange }) {
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
      <PlantPrice price={price} id={id} onPriceChange={onPriceChange} />
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
