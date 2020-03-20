import React from 'react';
import GridRow from './GridRow';

//Consider .map for array; create an array of a certain length then use .map to turn it into the array that you want
//Then you can put this directly into the return block
class Grid extends React.Component {
    render () {
        //const width = this.props.numCols * 16;
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