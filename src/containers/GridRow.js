import React from 'react';
import Box from './Box';

class GridRow extends React.Component{

    render () {

       let boxesCol = [...Array(this.props.numRows).keys()];

        return (
            <div className = "gridRow">
            {boxesCol.map((y) => <Box 
                key = {y}
                col = {y}
                row = {this.props.row}
            />)}
            </div>
        )
    }
}

export default GridRow;