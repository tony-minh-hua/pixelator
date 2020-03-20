import React from 'react';
import GridRow from './GridRow';

class Grid extends React.Component {
    render () {
        let boxesRow = [...Array(this.props.numCols).keys()];

        /*
        for (let x = 0; x < this.props.numRows; x++) {
            boxesRow.push (
                <GridRow
                    key = {x}
                    row = {x}
                    numCols = {this.props.numCols}
                />
            );
        }
*/
        return (
        <div className = "grid" style = {{width: this.props.numCols * 16}}>
            {boxesRow.map ((x) => <GridRow 
                key = {x}
                row = {x}
                numCols = {this.props.numCols}
            />
            )}
        </div>
        )
    }
}

export default Grid;