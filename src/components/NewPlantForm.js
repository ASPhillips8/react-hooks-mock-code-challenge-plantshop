import React, { useState } from "react"

function NewPlantForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
  })

  function handleFormInput(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const NewPlant = {
    name: formData.name,
    image: formData.image,
    price: parseFloat(formData.price),
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewPlant),
    })
      .then((response) => response.json())
      .then((newPlantData) => onFormSubmit(newPlantData))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Plant name"
          onChange={handleFormInput}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleFormInput}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          step="0.01"
          placeholder="Price"
          onChange={handleFormInput}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
