import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './Modal.css';

class Modal extends Component{

    state = {

    }

    render(){
        return(
            <div className="site-modal" style={modalInlineStyle}>
                <div className="modal-content">
                    <div className="col right">
                        <span onClick={} className="close">&times;</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({

    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)



