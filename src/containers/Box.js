import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {tileChanged} from '../actions/index';

class Box extends React.Component {
    /*
    constructor () {
        super();
        
        this.state = {
            className: "box off"
        }
        
    }    
    selectBox = () => {
        let boxColor = this.props.grid.gridData.find (e => e.id === this.props.key).color;
        let boxClass = boxcolor != null ? ("box " + boxcolor) : "box off";
        //TODO: updated state should be sent to Redux store
        this.setState ({
            className: boxClass
        })
        
    }
    */
    //componentDidMount () {
    //    this.props.tileDefault();
    //}
    
    render () {
        
        let boxColor = this.props.grid.gridData.find (e => e.id === this.props.id).color;
        return (
            <div
                className = {boxColor != null ? ("box " + boxColor) : "box off"}
                key = {this.props.key}
                onClick = {() => this.props.tileChanged( {id: this.props.id, color: this.props.color} )}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        color: state.activeColor,
        grid: state.currentGrid
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        tileChanged: tileChanged},
         dispatch)  
}

export default connect(mapStateToProps, matchDispatchToProps)(Box);