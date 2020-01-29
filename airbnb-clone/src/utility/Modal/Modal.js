import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './Modal.css';

class Modal extends Component{

    state = {

    }

    render(){
        let modalInlineStyle
        if(this.props.siteModal.openClose === "open"){
            modalInlineStyle = {display: 'block'};
        }else{
            modalInlineStyle = {display: 'none'};
        }
        

        return(
            <div className="site-modal" style={modalInlineStyle}>
                <div className="modal-content">
                    <div className="col right">
                        <span onClick={this.closeModal} className="close">&times;</span>
                        {this.props.siteModal.content}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        siteModal: state.siteModal
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({

    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)



