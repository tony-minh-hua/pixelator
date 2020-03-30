import colorReducer from './colorPicked';
import sizeReducer from './sizeChanged';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    activeColor: colorReducer,
    currentSize: sizeReducer
});

export default allReducers;