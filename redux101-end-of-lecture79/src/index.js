import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to wire up a redux/react app, we need react-redux. 
// we need the Provider ReactComponent, to be around everything!
import { Provider } from 'react-redux';
// 2. create the redux store, so that redux exists, and the provider has a store!
import { createStore } from 'redux';
// 3. reducers to populate the store
// 3a. We always start with a rootReducer
// 4. make individual reducers to hand to the rootreducer (3)
import rootReducer from './reducers/rootReducer';
// 5. create the store (2) by passing it the root rootReducer, which is made up of the reducers
const theStore = createStore(rootReducer);

// Provider is the glue between react and redux. Give it the store!
ReactDOM.render(
    <Provider store={theStore} >
        <App />
    </Provider>, 
    document.getElementById('root')
);

