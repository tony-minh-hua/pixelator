import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sizeIncreased, sizeDecreased} from '../actions/index';
import '../index.css';
import ColorPalette from './ColorPalette';
import Grid from './Grid';

class Main extends React.Component {

    render () {
        return (
            
            <div>
                <button className = "btn btn-default" onClick = { () => this.props.sizeIncreased(1)}>
                    Expand Size
                    </button>
                    <button className = "btn btn-default" onClick = { () => this.props.sizeDecreased(1)}>
                    Reduce Size
                    </button>
                <ColorPalette
                />
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
        size: state.currentGrid.size
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sizeIncreased: sizeIncreased,
        sizeDecreased: sizeDecreased},
         dispatch)
    
}

export default connect (mapStateToProps, matchDispatchToProps)(Main);