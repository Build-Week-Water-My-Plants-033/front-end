import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PlantListItem from './PlantListItem';
import axiosWithAuth from '../utils/axiosWithAuth';

const PlantList = styled.div`
`;

const PlantsList = props => {
    const { plants, setPlants } = props;

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