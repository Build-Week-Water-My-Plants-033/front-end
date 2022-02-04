import React, { useState } from "react";
import styled from 'styled-components';
import EditPlantForm from "./EditPlantForm";


const HeroPlantCell = styled.td`
    font-size: 12px;
    font-weight:normal;
    justify-content: space-between;
    margin-left: 3.4%;
    margin-right: 16%;
    margin-top:3%;
    text-align: center;
    align-items: center;
    display:flex;

`;

const PlantListButton = styled.button`
    margin: 3px;
    display: flex;
    justify-content: space-between;
`;

const PlantListItem = props => {
  const { plant, handleDelete } = props;

  const [ editing, setEditing ] = useState(false);

  const editCancel = () => {
    setEditing(false);
  }

  const handleEdit = () => {

  }

  return (
    <>
          <HeroPlantCell>
            <td>{plant.id}</td>
            <td>{plant.nickname}</td>
            <td>{plant.species}</td>
            <td>{plant.h2oFrequency}
            <PlantListButton onClick={() => setEditing(true)}>Edit</PlantListButton>
            <PlantListButton onClick={() => handleDelete(plant.id)}>Delete</PlantListButton>
              {editing && <EditPlantForm plant={plant} handleEdit={handleEdit} editCancel={editCancel}/>}</td>
          </HeroPlantCell>
    </>

  )
}

export default PlantListItem;