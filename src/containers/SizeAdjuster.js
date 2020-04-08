import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {sizeIncreased, sizeDecreased} from '../actions/index';

class SizeAdjuster extends React.Component {
    render () {
        return (
            <div>
                <button className = "btn btn-default" onClick = { () => this.props.sizeIncreased(1)}>
                Expand Size
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.sizeDecreased(1)}>
                Reduce Size
                </button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sizeIncreased: sizeIncreased,
        sizeDecreased: sizeDecreased},
         dispatch)
    
}

export default connect (null, matchDispatchToProps)(SizeAdjuster);