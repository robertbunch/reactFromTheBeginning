import React, {Component} from 'react'

//we want this component to know about redux.
//to do that, we need some help... or some glue
// the glue is react-redux! We need the connect function
import { connect } from 'react-redux';

class FrozenDept extends Component{
    render(){
        console.log(this.props.frozenData);
        return(
            <h1>The frozen food department!</h1>
        )
    }
}

// console.log(connect);
// mapStateToProps takes 1 arg, "state" and that is the rootReducer/Store
function mapStateToProps(state){
    // mapStateToProps returns an object, with:
    // property is the local prop name to this component
    // value will be the property in the root reducer... ie, a peice of the store 
    return {
        frozenData: state.frozen
    }    
}

// export default FrozenDept;
// connect takes 2 args, the first one is a function that is going to map
// a piece of redux state to this components props
export default connect(mapStateToProps)(FrozenDept);