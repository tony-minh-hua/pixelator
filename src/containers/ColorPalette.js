import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {colorPicked} from '../actions/index';
import { ButtonToolbar } from 'react-bootstrap';

class ColorPalette extends React.Component {
    
    render () {
        let colors = ["red", "blue", "green", "yellow", "purple", "brown", "orange"];

        return (
            <div className = "center">
                <ButtonToolbar>
                    {colors.map ( (T) => <button className = "btn btn-default" onClick = { () => this.props.colorPicked (T)} key = {T}>
                    {T}
                    </button>)};
                </ButtonToolbar>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        colorPicked: colorPicked},
         dispatch)  
}

export default connect (null, matchDispatchToProps)(ColorPalette);