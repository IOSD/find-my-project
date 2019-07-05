import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component{
	render(){
        return(
            <div>
                Home sweet home :P
            </div>
        );
    }
}

// Redux connection
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));