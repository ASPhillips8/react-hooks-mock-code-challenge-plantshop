import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, onDelete }) {
  const plantList = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} onDelete={onDelete} />
  })
  return <ul className="cards">{plantList}</ul>
}

export default PlantList
