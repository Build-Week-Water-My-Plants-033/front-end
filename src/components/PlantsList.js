import React from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';


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
           { props.plants.map(plant=>
           <div>
                <td>{plant.Id}</td>
                <td>{plant.Nickname}</td>
                <td>{plant.Species}</td>
                <td>{plant.H2OFrequency}</td>
                <td>
               <Link to={'/addplantform'}>
                   <input type="button" value ="Edit"/>
               </Link>
               <Link to={'/plantslist'}>
                   <input type="button" value ="Delete" onClick={() => {handleDelete}}/>
               </Link>
                </td>
            </div>)
            }
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