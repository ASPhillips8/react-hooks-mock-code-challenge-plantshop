import React, { useState } from "react"

function PlantCard({ plant: { id, name, image, price } }) {
  const [isInStock, setIsInStock] = useState(true)

  function handleInStock() {
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
