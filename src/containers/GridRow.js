import React from 'react';
import Box from './Box';

class GridRow extends React.Component{

    render () {
        /*
        let boxesCol = [];

        let boxClass = "";

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
        */

       let boxesCol = [...Array(this.props.numCols).keys()];

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