import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';

class Home extends Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
