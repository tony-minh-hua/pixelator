import React from 'react';
import Box from './Box';

class GridRow extends React.Component{

    render () {

       let boxesCol = [...Array(this.props.numRows).keys()];

        return (
            <div className = "gridRow">
            {boxesCol.map((y) => <Box 
                key = {this.props.row + "-" + y}
                id = {this.props.row + "-" + y}
            />)}
            </div>
        )
    }
}

export default GridRow;