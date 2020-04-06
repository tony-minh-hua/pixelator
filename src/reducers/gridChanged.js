import { cloneDeep } from "lodash";
import undoable from 'redux-undo';
/*
This reducer manages the size (x,y) dimensions of the grid.
*/

const gridReducer = (state = {size: 1, gridData: gridStarter(1)}, action) => {
    switch (action.type) {
        case "SIZE_INCREASED":
            let addedData = cloneDeep(state);
            addedData.size += action.payload;
            for (let i = state.size; i < state.size + action.payload; i++) {
                for (let j = 0; j < state.size + action.payload; j++) {
                    if (state.gridData.find(e => e.id === i + "-" + j) == undefined) {
                        addedData.gridData.push ({id: i + "-" + j, color: null})
                    }
                }
            }
            for (let j = state.size; j < state.size + action.payload; j++) {
                for (let i = 0; i < state.size + action.payload - 1; i++) {
                    if (state.gridData.find(e => e.id === i + "-" + j) == undefined) {
                        addedData.gridData.push ({id: i + "-" + j, color: null})
                    }
                }
            }
            return addedData;
        case "SIZE_DECREASED":
            return {...state, size: state.size - action.payload};
        case "COLOR_CHANGED":
            let newData = cloneDeep(state);
            newData.gridData.find(e => e.id === action.payload.id).color = action.payload.color;
            return newData;
        case "GRID_DEFAULT":
            let newGrid = [];
                for (let i = 0; i < state.size; i++) {
                    for (let j = 0; j < state.size; j++) {
                        newGrid.push({id: i + "-" + j, color: null});
                    }
                }
            return {...state, gridData: newGrid};
        default:
            return state;
    }
};

const undoableGridReducer = undoable(gridReducer)

const gridStarter = (size) => {
    let grid = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid.push({id: i + "-" + j, color: null});
        }
    }
    return grid;
}

export default undoableGridReducer;
//export default gridReducer;