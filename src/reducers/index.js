import { action } from 'commander';
import { ADD_PLANT } from './../actions/addPlant';

const initialState = {
    plants: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLANT:
            return{
                ...state,
                plants: [...state.plants, action.plant]
            }
        default:
            return state;
    }

}  

export default reducer;