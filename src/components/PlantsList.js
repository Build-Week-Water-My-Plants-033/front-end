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
`;

const PlantList = styled.table`
    background: #d19c1d;
    opacity: 0.54;
    border-radius:1.6%;
    border-style:inset;
    width: 30%;
    height: 30%;
`;

const PlantListHead = styled.th`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-top:1.6%;
    margin-left: 3%;
    margin-right: 3%;
    font-size: 21px;
`;

const HeroPlantRow = styled.tr`
  display: flex ;
`;

const mockPlantsData = [
    {
        id: 0,
        nickname: 'Mosses',
        species: 'Byrophyta',
        h2oFrequency: 'Everyday'
    },
    {
        id: 1,
        nickname: 'Himalayan MaidenHair',
        species: 'Fern',
        h2oFrequency: 'Everyday'
    },
    {
        id: 2,
        nickname: 'English Rose',
        species: 'Roses Shrubs',
        h2oFrequency: 'Average'
    },
    {
        id: 3,
        nickname: 'European Silver Fir',
        species: 'Conifers',
        h2oFrequency: 'Low'
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
            <PlantListHead>
                    <th>Id</th>
                    <th>Nickname</th>
                    <th>Species</th>
                    <th>h2oFrequency</th>
            </PlantListHead>
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