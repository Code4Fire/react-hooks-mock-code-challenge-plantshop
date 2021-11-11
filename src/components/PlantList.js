import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="plantCards">{plants.map(plant => 
    <PlantCard
      name= {plant.name}
      key= {plant.id}
      image = {plant.image}
      price= {plant.price}/>
    )}


    </ul>
  );
}

export default PlantList;
