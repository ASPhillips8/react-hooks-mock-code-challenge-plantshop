import React, { useState } from "react"

function PlantPrice({ id, price, onPriceChange }) {
  const [newPrice, setNewPrice] = useState(price)

  function handlePriceInput(event) {
    setNewPrice(event.target.value)
  }

  function handleSubmitPrice(event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: Number(newPrice) }),
    })
      .then((response) => response.json())
      .then(() => onPriceChange())
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmitPrice}>
        <input
          type="number"
          name="price"
          value={newPrice}
          step="0.01"
          placeholder="Price"
          onChange={handlePriceInput}
        />
        <button>Set New Price</button>
      </form>
    </div>
  )
}

export default PlantPrice
