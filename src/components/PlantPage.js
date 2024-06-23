import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const filteredPlants = plantsList.filter((plant) =>
    plant.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  console.log(filteredPlants)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlantsList(plantData))
  }, [])

  function handlePlantSearch(search) {
    setSearchInput(search)
  }

  function handleSubmitForm(newPlant) {
    setPlantsList([...plantsList, newPlant])
  }

  return (
    <main>
      <NewPlantForm onHandleSubmitForm={handleSubmitForm} />
      <Search onSearch={handlePlantSearch} />
      <PlantList plantsList={filteredPlants} />
    </main>
  )
}

export default PlantPage
