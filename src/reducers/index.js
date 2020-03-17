import colorReducer from './colorPicked';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    activeColor: colorReducer
});

export default allReducers;