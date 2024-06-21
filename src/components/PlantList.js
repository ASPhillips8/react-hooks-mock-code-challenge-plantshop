import React, { useState, useEffect } from "react"
import PlantCard from "./PlantCard"

function PlantList() {
  const [plantsList, setPlantsList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlantsList(plantData))
  }, [])

  const displayPlants = plantsList.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return <ul className="cards">{displayPlants}</ul>
}

export default PlantList
