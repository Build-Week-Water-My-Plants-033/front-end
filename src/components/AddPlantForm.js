import React, { useState } from 'react';
import { addPlant } from '../actions/addPlant';
import { connect } from 'react-redux'

import { Link , useHistory } from 'react-router-dom';

const AddPlantForm = (props) => {
    const { push } = useHistory();


const [plant, setPlant] = useState({
    Id: "",
    Nickname: "",
    Species: "",
    H2OFrequency: ""
});

const handleChange = (e) =>{

    setPlant({
        ...plant, 
        [e.target.name] : e.target.value
    });
}

const handleSubmit = (e) =>{
    e.preventDefault()
    props.addPlant({...plant, Id: Date.now()});
    push('/plantslist/')

}

const { Id, Nickname, Species, H2OFrequency } = plant;
return (
    <form onSubmit={handleSubmit}>
        <h2> Add Plant </h2>
        <div>
            <label>Id</label>
            <input value ={Id} onChange={handleChange} name="id" type="text"></input>
        </div>
        <div>
            <label>Nickname</label>
            <input value ={Nickname} onChange={handleChange} name="nickname" type="text"></input>
        </div>
        <div>
            <label>Species</label>
            <input value ={Species} onChange={handleChange} name="species" type="text"></input>
        </div>
        <div>
            <label>H2OFrequency</label>
            <input value ={H2OFrequency} onChange={handleChange} name="frequency" type="text"></input>
        </div>
        <div>
            <input type="submit" value="Add"></input>
            <Link to={`/plantslist`}><input type="button" value="Cancel"/></Link>
        </div>
    </form>
);

};
const mapStateToProps = (state) => {
    return {
        plants: ""
    }
}
export default connect(mapStateToProps, { addPlant })(AddPlantForm);