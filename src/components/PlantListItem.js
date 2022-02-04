import React from "react";
import styled from 'styled-components';
// import EditPlantForm from "./EditPlantForm";


const HeroPlantCell = styled.td`
    font-size: 14px;
    color: #ffff;
    font-weight:normal;
    justify-content: space-between;
    margin: 5% 5%;
    text-align: center;
    align-items: center;
    display:flex;
    box-shadow: 0 1px 3px rgba(0.0.0.0.9);

`;

const PlantListButton = styled.td`
   font-weight:bold;
   font-size: 16px;
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
`;

const PlantListItem = props => {
  const { plant, handleDelete } = props;

  // const [ editing, setEditing ] = useState(false);

  // const editCancel = () => {
  //   setEditing(false);
  // }

  return (
    <>
          <HeroPlantCell>
            <td>{plant.id}</td>
            <td>{plant.nickname}</td>
            <td>{plant.species}</td>
            <td>{plant.h2oFrequency}</td>
            <PlantListButton onClick={() => handleDelete(plant.id)}>x</PlantListButton>
            {/* <PlantListButton onClick={() => setEditing(true)}>Edit</PlantListButton> */}
            {/* {editing && <EditPlantForm plant={plant} editCancel={editCancel}/>} */}
          </HeroPlantCell>
    </>

  )
}

export default PlantListItem;