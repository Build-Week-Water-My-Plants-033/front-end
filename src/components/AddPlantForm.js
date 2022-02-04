import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link , useHistory } from 'react-router-dom';

const initialState = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: ""
}

const AddPlantForm = (props) => {
  const { push } = useHistory();

//   const { plants, setPlants } = props;

  const [newPlant, setNewPlant] = useState(initialState);

  const handleChange = (e) =>{
      setNewPlant({
          ...newPlant, 
          id: Date.now(),
          [e.target.name] : e.target.value
      });
  }

  const handleSubmit = (e) =>{
      e.preventDefault();

    //   setPlants([
    //     ...plants,
    //     newPlant
    //   ]);

      axiosWithAuth().post('/plants', newPlant)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    //   push('/plants/');
  }


  return (
      <form onSubmit={handleSubmit}>
          <h2> Add Plant </h2>
          <div>
              <label>Nickname</label>
              <input value ={newPlant.nickname} onChange={handleChange} name="nickname" type="text"></input>
          </div>
          <div>
              <label>Species</label>
              <input value ={newPlant.species} onChange={handleChange} name="species" type="text"></input>
          </div>
          <div>
              <label>H2OFrequency</label>
              <input value ={newPlant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text"></input>
          </div>
          <div>
              <input type="submit" value="Add"></input>
              <Link to={`/plants`}><input type="button" value="Cancel"/></Link>
          </div>
      </form>
  );
};

export default AddPlantForm;