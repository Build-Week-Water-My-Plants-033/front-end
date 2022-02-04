import React, { useState, useEffect } from 'react';
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
    opacity: 0.81;
    width: 30%;
    height: 30%;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0.0.0.0.9);
`;

const PlantListHead = styled.th`
    display: flex;
    color:#ffff;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-top:3%;
    margin-left: 3%;
    margin-right: 3%;
    font-size: 21px;
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
            {plants.map(plant=> <PlantListItem key={plant.id} plant={plant} handleDelete={handleDelete}/>)}
        </PlantList>
        </HeroContainer>
    )
}

export default PlantsList;