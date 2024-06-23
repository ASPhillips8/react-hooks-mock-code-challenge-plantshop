import React, { useState, useEffect } from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantsList }) {
  const displayPlants = plantsList.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return <ul className="cards">{displayPlants}</ul>
}

export default PlantList
