import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ButtonToolbar } from 'react-bootstrap';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { colorPicked } from './actions';
import ColorPalette from './containers/ColorPalette';
import Box from './containers/Box';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class GridRow extends React.Component{

    render () {
        const width = this.props.numCols * 16;
        var boxesCol = [];

        var boxClass = "";

        for (let y = 0; y < this.props.numCols; y++) {

            boxClass = "box off";
            
            boxesCol.push (
                <Box
                boxClass = {boxClass}
                key = {y}
                col = {y}
                row = {this.props.row}
                />
            );
        }
        return (
            <div className = "gridRow">
            {boxesCol}
            </div>
        )
    }
}

class Grid extends React.Component {
    render () {
        const width = this.props.numCols * 16;
        var boxesRow = [];     

        for (let x = 0; x < this.props.numRows; x++) {

            boxesRow.push (
                <GridRow
                    key = {x}
                    row = {x}
                    numCols = {this.props.numCols}
                />
            );
        }

        return (
            <div className = "grid" style = {{width: width}}>
                {boxesRow}
        </div>
        )
    }
}



class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            numCols: 30,
            numRows: 30,
        }
    }

    addColButton = () => {
        this.numCols += 1;
    }

    render () {
        return (
            <div>
                
                <ColorPalette
                />
                <h1>The Grid</h1>
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