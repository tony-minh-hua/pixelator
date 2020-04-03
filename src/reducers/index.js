import colorReducer from './colorPicked';
import gridReducer from './gridChanged';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    activeColor: colorReducer,
    currentGrid: gridReducer
});

export default allReducers;