import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [userInput, setUserInput] =useState(" ")
  
  function setItemArr(newPlant) {
    setPlants([...plants, newPlant])
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => {
        setPlants(data)
      });
  }, []);


  const searchPlantList = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(userInput.toLowerCase());
  });


  return (
    <main>
      <NewPlantForm plants={plants} setItemArr= {setItemArr}/>
      <Search userInput ={userInput} setUserInput={setUserInput}/>
      <PlantList plants={plants} setPlants= {searchPlantList} />
    </main>
  );
}

export default PlantPage;
