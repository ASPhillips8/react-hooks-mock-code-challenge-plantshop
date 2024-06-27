import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [sortCategory, setSortCategory] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

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

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlants(plantData))
      .catch((error) => console.error("Fetch error:", error))
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onFormSubmit={toggleFetchTrigger} />
      <Search onSearch={setSearch} onSort={setSortCategory} />
      <PlantList
        plants={sortedAndFilteredPlants()}
        onDelete={toggleFetchTrigger}
        onPriceChange={toggleFetchTrigger}
      />
    </main>
  )
}

export default PlantPage
