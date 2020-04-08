import React from 'react';
import {connect} from 'react-redux';
import '../index.css';
import ColorPalette from './ColorPalette';
import SizeAdjuster from './SizeAdjuster';
import UndoRedo from './UndoRedo';
import Grid from './Grid';

class Main extends React.Component {

    render () {
        return (
            
            <div>
                <UndoRedo />
                <SizeAdjuster />
                <ColorPalette />
                <h1>Pixelator</h1>
                <Grid
                numCols = {this.props.size}
                numRows = {this.props.size}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        size: state.currentGrid.present.size
    };
}

export default connect (mapStateToProps, null)(Main);