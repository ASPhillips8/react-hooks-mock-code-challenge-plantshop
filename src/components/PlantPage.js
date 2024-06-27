import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [sortCategory, setSortCategory] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlants(plantData))
      .catch((error) => console.error("Fetch error:", error))
  }, [])

  function handleNewPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handlePlantDelete(id) {
    const updatedPlants = plants.filter((plant) => plant.id !== id)
    setPlants(updatedPlants)
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  const sortedAndFilteredPlants = () => {
    if (sortCategory === "name") {
      return filteredPlants.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortCategory === "price") {
      return filteredPlants.sort((a, b) => a.price - b.price)
    } else {
      return filteredPlants
    }
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={handleNewPlantSubmit} />
      <Search onSearch={setSearch} onSort={setSortCategory} />
      <PlantList
        plants={sortedAndFilteredPlants()}
        onDelete={handlePlantDelete}
      />
    </main>
  )
}

export default PlantPage
