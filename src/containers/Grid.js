import React from 'react';
import GridRow from './GridRow';

class Grid extends React.Component {
    render () {
        let boxesRow = [...Array(this.props.numCols).keys()];

        return (
        <div className = "grid" style = {{width: this.props.numCols * 16}}>
            {boxesRow.map ((x) => <GridRow 
                key = {x}
                row = {x}
                numRows = {this.props.numRows}
            />
            )}
        </div>
        )
    }
}

export default Grid;