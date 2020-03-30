import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import Main from './containers/Main';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store = { store }>
        <Main />
    </Provider>,
 document.getElementById('root')
 );