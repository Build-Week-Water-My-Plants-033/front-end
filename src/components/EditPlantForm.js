import React, { useState } from "react";

const EditPlantForm = props => {
  const { plant, editCancel } = props;
  
  const [ editedPlant, setEditedPlant ] = useState(plant);

  const handleChange = (e) =>{
    setEditedPlant({
        ...plant, 
        [e.target.name] : e.target.value
    });
}
  return (
    <div>
      <form>
          <h2> Edit Plant </h2>
          <div>
              <label>Nickname</label>
              <input value ={editedPlant.nickname} onChange={handleChange} name="nickname" type="text"></input>
          </div>
          <div>
              <label>Species</label>
              <input value ={editedPlant.species} onChange={handleChange} name="species" type="text"></input>
          </div>
          <div>
              <label>H2OFrequency</label>
              <input value ={editedPlant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text"></input>
          </div>
          <div>
              <input type="submit" value="Submit"></input>
              <input type="submit" value="Cancel" onClick={() => editCancel()}></input>
          </div>
      </form>
    </div>
  )
}

export default EditPlantForm;