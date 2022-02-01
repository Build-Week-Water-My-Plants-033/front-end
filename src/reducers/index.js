import { ADD_PLANT } from './../actions/addPlant';

const initialState = {
    plants: [{
        ID: 1,
        Nickname: "Beautiful Flower",
        Species: "Rose, Fragrant",
        H20Frequency: "Every 3 days"

    },
    {
        ID: 2,
        Nickname: "Beautiful Flower",
        Species: "Lily, Fragrant",
        H20Frequency: "Every 3 days"

    },
    {
        ID: 3,
        Nickname: "Beautiful Flower",
        Species: "Jasmine, Fragrant",
        H20Frequency: "Every 3 days"

    }]
};

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