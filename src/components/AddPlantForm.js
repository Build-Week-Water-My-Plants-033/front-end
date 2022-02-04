import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link , useHistory } from 'react-router-dom';
import styled from 'styled-components';

// styles 

const Form = styled.form`
background: #d19c1d;
max-width: 300px;
height: auto;
width: 100%auto;
z-index: 1;
display: grid;
margin: 4rem auto;
padding: 80px 32px;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0.0.0.0.9);

@media screen and (max-width:400px){
    padding:32px 32px;
}
`;

const H2 = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    background: white;
    color: #d19c1d;
`;

// const FormInput1 = styled.input`
//     /* display: flex; */
//     padding: 12px 90px;
//     margin-bottom: 32px;
//     border-radius: 15px;
//     background: white;
// `;

// const FormInput2 = styled.input`
//     /* display: flex; */
//     padding: 16px 80px;
//     margin-bottom: 32px;
//     border-radius: 30px;
//     background: red;
//     text-decoration: none;
// `;

const FormButton = styled.button`
    background: white;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #d19c1d;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

const NavBtnLink = styled(Link)`
    padding: 16px 0;
    color: #d19c1d;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    
`;
// end of styles 

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
      <Form onSubmit={handleSubmit}>
              <H2>ADD NEW PLANT</H2>
              <FormLabel>Nickname</FormLabel>
              <FormInput value ={newPlant.nickname} onChange={handleChange} name="nickname" type="text"></FormInput>
          
          
              <FormLabel>Species</FormLabel>
              <FormInput value ={newPlant.species} onChange={handleChange} name="species" type="text"></FormInput>
          
          
              <FormLabel>H2OFrequency</FormLabel>
              <FormInput value ={newPlant.h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text"></FormInput>
          
          
              <FormButton type="submit" value="Add Plant">ADD</FormButton>
              <NavBtnLink to={`/plants`}><FormInput type="button" value="Cancel"/></NavBtnLink>
          
      </Form>
  );
};

export default AddPlantForm;