export const ADD_PLANT = "ADD_PLANT";

export const addPlant = (plant) => {
    return ({
        type:ADD_PLANT, plant
    });
}
