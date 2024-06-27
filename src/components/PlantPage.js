import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlants(plantData))
      .catch((error) => console.error("Fetch error:", error))
  }, [])

  function handleNewPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <main>
      <NewPlantForm onFormSubmit={handleNewPlantSubmit} />
      <Search onSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  )
}

export default PlantPage
