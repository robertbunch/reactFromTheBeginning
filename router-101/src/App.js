import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';

const Host = ()=><h1>Become a host</h1>
const Help = ()=><h1>Help</h1>
const Login = ()=><h1>Login</h1>
const Signup = ()=><h1>Sign in</h1>

function App() {
  return (
    <Router>
        <NavBar />
        <Route exact path="/" render={()=>{
          return <Home title="Hello" />
        }} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
