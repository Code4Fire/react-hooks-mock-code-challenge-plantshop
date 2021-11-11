import React, { useState, useEffect }from "react";

function NewPlantForm({newPlant, setItemArr, plants}) {

  const [name, setName]= useState(" ")
  const [price, setPrice]= useState(0)
  const [image, setImage]=useState(" ")

function handleNameChange(event){
  setName(event.target.value)
}
function handleImageChange(event){
  setImage(event.target.value)
}
function handlePriceChange(event){
  setPrice(event.target.value)
}
// function clearForm() {
//   NewPlantForm({
//     name:" ",
//     image:" ",
//     price: 0
//   })

function handleAddNewPlant(e) {
  e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        name,
        price,
        image,
      })
    })
      .then(res => res.json())
      .then(newPlant => {
        setItemArr(newPlant)
      })
      // clearform()      
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {handleAddNewPlant}>
        <input type="text" name="name" placeholder="Plant name" value = {name} onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" value = {image} onChange = {handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value ={price} onChange = {handlePriceChange}/>
        <button type="submit" onClick ={handleAddNewPlant}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
