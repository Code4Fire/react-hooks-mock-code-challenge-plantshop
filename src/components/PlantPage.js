import React, {useState, useEffect, useReducer} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [userInput, setUserInput] =useState(" ")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => {
        setPlants(data)
        
      });
  }, []);

  function setItemArr(newPlant) {
    setPlants([...plants, newPlant])
  }

  const searchPlantList = plants.filter((plant => {
    return plant.name.toLowercase().includes(userInput.toLowerCase())
  }))


  return (
    <main>
      <NewPlantForm plants={plants} setItemArr= {setItemArr}/>
      <Search userInput ={userInput} setUserInput={setUserInput}/>
      <PlantList plants={plants} setPlants= {setPlants}/>
    </main>
  );
}

export default PlantPage;
