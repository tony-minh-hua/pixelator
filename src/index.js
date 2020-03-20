import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import ColorPalette from './containers/ColorPalette';
import Grid from './containers/Grid';

//Consider splitting off the store and React Components to their own files

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            numCols: 30,
            numRows: 30,
        }
    }

    expandGridButton = () => {
        let newCol = this.state.numCols + 1;
        let newRow = this.state.numRows + 1;
        this.setState ({
            numCols: newCol,
            numRows: newRow
        }) 
    }

    reduceGridButton = () => {
        let newCol = this.state.numCols === 1 ? 1 : this.state.numCols - 1;
        let newRow = this.state.numRows === 1 ? 1 : this.state.numRows - 1;
        
        this.setState ({
            numCols: newCol,
            numRows: newRow
        }) 
    }

    render () {
        return (
            <div>
                <button className = "btn btn-default" onClick = { () => this.expandGridButton()}>
                    Expand Size
                    </button>
                    <button className = "btn btn-default" onClick = { () => this.reduceGridButton()}>
                    Reduce Size
                    </button>
                <ColorPalette
                />
                <h1>Pixelator</h1>
                <Grid
                numCols = {this.state.numCols}
                numRows = {this.state.numRows}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = { store }>
        <Main />
    </Provider>,
 document.getElementById('root')
 );