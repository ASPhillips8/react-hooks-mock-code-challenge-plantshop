import React, { useState } from "react"

function PlantCard({ plant }) {
  const { id, name, image, price } = plant
  const [isINStock, setIsInStock] = useState(true)

  function handleStockClick() {
    setIsInStock(!isINStock)
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
    </li>
  )
}

export default PlantCard
