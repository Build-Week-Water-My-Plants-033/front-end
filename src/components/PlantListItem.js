import React, { useState } from "react";

import EditPlantForm from "./EditPlantForm";

const PlantListItem = props => {
  const { plant, handleDelete } = props;

  const [ editing, setEditing ] = useState(false);

  const editCancel = () => {
    setEditing(false);
  }

  const handleEdit = () => {

  }

  return (
    <div>
      <p>Name: {plant.nickname}</p>
      <p>Species: {plant.species}</p>
      <p>H2O Frequency: {plant.h2oFrequency}</p>
      <p>ID: {plant.id}</p>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={() => handleDelete(plant.id)}>Delete</button>
      {editing && <EditPlantForm plant={plant} handleEdit={handleEdit} editCancel={editCancel}/>}
    </div>
  )
}

export default PlantListItem;