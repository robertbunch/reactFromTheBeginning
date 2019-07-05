import React, {Component} from 'react'
import { connect } from 'react-redux';
import updateProduce from '../actions/produceInvUpdate';

class ProduceDept extends Component{

    increment = (operation, index)=>{
        // console.log(operation,index);
        if(operation === "+"){
            console.log(updateProduce());
        }else if(operation === "-"){
            
        }
    }

    render(){
        const produceInventory = this.props.produceData.map((item,i)=>{
            return(
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={()=>{this.increment('+',i)}} value="+" />
                    <input type="button" onClick={()=>{this.increment('-',i)}} value="-" />
                </div>
            )
})
        return(
            <div>
                <h1>The produce food department!</h1>
                <ul>
                    {produceInventory}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        produceData: state.produce
    }    
}

export default connect(mapStateToProps)(ProduceDept);