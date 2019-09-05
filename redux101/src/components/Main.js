import React, {Component} from 'react'
import { connect } from 'react-redux';
import clearInventory from '../actions/clearInventory';
import { bindActionCreators } from 'redux';

class Main extends Component{

    // clearInventoryAction = ()=>{
    //     this.props.clearInventory();
    // }

    render(){
        const frozenQuantity = this.props.frozenData.reduce((accum,frozenItem)=>
            accum+frozenItem.quantity,0)
        const meatQuantity = this.props.meatData.reduce((accum,meatItem)=>
            accum+meatItem.quantity,0)
        const produceQuantity = this.props.produceData.reduce((accum,produceItem)=>
            accum+produceItem.quantity,0)

            return(
            <div>
                <h2>FrozenDept: {frozenQuantity}</h2>
                <h2>MeatDept: {meatQuantity}</h2>
                <h2>ProduceDept: {produceQuantity} </h2>
                <button onClick={this.props.clearInventory}>Clear all Inventory!!</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        frozenData: state.frozen,
        meatData: state.meat,
        produceData: state.produce,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory: clearInventory
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);