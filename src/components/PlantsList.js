import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PlantListItem from './PlantListItem';
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantList = styled.div`
`;

const mockPlantsData = [
    {
        id: 0,
        nickname: 'Plant 1',
        species: 'Species',
        h2oFrequency: 'Water Freq'
    },
    {
        id: 1,
        nickname: 'Plant 2',
        species: 'Species',
        h2oFrequency: 'Water Freq'
    },
    {
        id: 2,
        nickname: 'Plant 3',
        species: 'Species',
        h2oFrequency: 'Water Freq'
    },
    {
        id: 3,
        nickname: 'Plant 4',
        species: 'Species',
        h2oFrequency: 'Water Freq'
    }
  ];

const PlantsList = props => {
    const [ plants, setPlants ] = useState(mockPlantsData);

    useEffect(() => {
        axiosWithAuth().get('/plants')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        const newPlants = plants.filter(plant => plant.id !== id)
        
        setPlants(newPlants)
    }

    return (
        <PlantList>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/plants/add'>
                <button>Add New Plant</button>
            </Link>
            <Link to='/user'>
                <button>Profile</button>
            </Link>
            <button>Logout</button>
            {plants.map(plant=> <PlantListItem key={plant.id} plant={plant} handleDelete={handleDelete}/>)}
        </PlantList>
    )
}

export default PlantsList;