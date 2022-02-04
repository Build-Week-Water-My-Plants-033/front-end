import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgImg from "../assets/bg-image.png";
import PlantListItem from './PlantListItem';
import axiosWithAuth from '../utils/axiosWithAuth';


const HeroContainer = styled.div`
    background-image:  url(${BgImg});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

    }
`;

const PlantList = styled.table`
    justify-content: center;
    background: #d19c1d;
    border-radius:3%;
    border-style:inset;
    justify-content: center;
    width: 12%;
    height: auto;
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
        <HeroContainer>
        <PlantList>
            {/* <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/plants/add'>
                <button>Add New Plant</button>
            </Link>
            <Link to='/user'>
                <button>Profile</button>
            </Link>
            <button>Logout</button> */}
            {plants.map(plant=> <PlantListItem key={plant.id} plant={plant} handleDelete={handleDelete}/>)}
        </PlantList>
        </HeroContainer>
    )
}

export default PlantsList;