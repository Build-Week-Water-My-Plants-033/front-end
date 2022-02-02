import React from 'react';
import { Link } from 'react-router-dom';

import PlantListItem from './PlantListItem';

const PlantsList = props => {
    const { plants, setPlants } = props;

    const handleDelete = (id) => {
        const newPlants = plants.filter(plant => plant.id !== id)
        
        setPlants(newPlants)
    }

    return (
        <div>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/plants/add'>
                <button>Add New Plant</button>
            </Link>
            <button>Profile</button>
            <button>Logout</button>
            {plants.map(plant=> <PlantListItem key={plant.id} plant={plant} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default PlantsList;