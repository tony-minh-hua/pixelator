import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {colorPicked} from '../actions/index';
import { ButtonToolbar } from 'react-bootstrap';

//Use array and map to create buttons; have an array somewhere else that contains all the colors already predefined
class ColorPalette extends React.Component {
    
    render () {
        let colors = ["red", "blue", "green", "yellow", "purple", "brown", "orange"];

        return (
            <div className = "center">
                <ButtonToolbar>
                    {colors.map ( (T) => <button className = "btn btn-default" onClick = { () => this.props.colorPicked (T)} key = {T}>
                    {T}
                    </button>)};
                    {/* 
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("red")} >
                Red
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("blue")} >
                Blue
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("green")} >
                Green
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("yellow")} >
                Yellow
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("purple")} >
                Purple
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("brown")} >
                Brown
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("orange")} >
                Orange
                </button>
                */}
                </ButtonToolbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state.color
        
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        colorPicked: colorPicked},
         dispatch)
    
}

export default connect (mapStateToProps, matchDispatchToProps)(ColorPalette);