import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlantsList(plantData))
  }, [])

  function handleSubmitForm(newPlant) {
    setPlantsList([...plantsList, newPlant])
  }

  return (
    <main>
      <NewPlantForm onHandleSubmitForm={handleSubmitForm} />
      <Search />
      <PlantList plantsList={plantsList} />
    </main>
  )
}

export default PlantPage
