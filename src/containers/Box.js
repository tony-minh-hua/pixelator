import React from 'react';
import {connect} from 'react-redux';

class Box extends React.Component {
    constructor () {
        super();
        this.state = {
            className: "box off"
        }
    }    
    selectBox = () => {
        
        let boxClass = this.props.color != null ? (this.state.className = "box " + this.props.color) : "box off";
        console.log(boxClass);
        this.setState ({
            className: boxClass
        })
    }
    
    render () {
        return (
            <div
                className = {this.state.className}
                id = {this.props.id}
                onClick = {this.selectBox}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        color: state.activeColor
    };
}

export default connect(mapStateToProps)(Box);