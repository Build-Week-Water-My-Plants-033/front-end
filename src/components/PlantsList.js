import React from 'react';
import { connect } from 'react-redux';

const PlantList = props => {
    console.log(props);

return (
    <div>
        <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Nickname</th>
            <th>Species</th>
            <th>H2OFrequency</th>
        </tr>
        </thead>
        <tbody>
           { props.plants.map(plant=><div>
                <p>{plant.Id}</p>
                <p>{plant.Nickname}</p>
                <p>{plant.Species}</p>
                <p>{plant.H2OFrequency}</p>
                </div>)}
        </tbody>
        </table>

    </div>
        
)}

const mapStateToProps = state =>{
    return(
        {
            plants: state.plants
        }
    )}

export default connect(mapStateToProps)(PlantList);