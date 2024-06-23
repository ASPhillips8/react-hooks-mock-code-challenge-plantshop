import React, { useState } from "react"

function PlantCard({ plant: { id, name, image, price }, onPlantDelete }) {
  const [isInStock, setIsInStock] = useState(true)

  console.log(onPlantDelete)

  function handleInStock() {
    setIsInStock(!isInStock)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => console.error("Fetch error:", error))
    onPlantDelete(id)
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
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  )
}

export default PlantCard
