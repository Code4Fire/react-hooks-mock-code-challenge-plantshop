import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="cards">
      {setPlants.map((plant) => {
        return (
        <PlantCard
        name= {plant.name}
        key= {plant.id}
        image = {plant.image}
        price= {plant.price}/>
        );
    })}
    </ul>
  );
}

export default PlantList;
