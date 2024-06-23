import React, { useState, useEffect } from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantsList, onPlantDelete }) {
  const displayPlants = plantsList.map((plant) => {
    return (
      <PlantCard key={plant.id} plant={plant} onPlantDelete={onPlantDelete} />
    )
  })

  return <ul className="cards">{displayPlants}</ul>
}

export default PlantList
