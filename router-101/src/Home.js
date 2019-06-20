
// const Home = ()=><h1>Home</h1>

import React from 'react';

function Home(props){
    console.log(props);
    props.history.block("are you sure you want to leave?");
    // setTimeout(()=>{
        // props.history.push("/help")
        // props.history.goBack();
    // },2000)
    return(
        <h1>{props.title}</h1>
    )
}
export default Home;