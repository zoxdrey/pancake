import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SignIn from './components/SingIn';
import SignUp from './components/SingUp';

ReactDOM.render(
<Router>
    <Switch>
            <Route path="/singin" component={SignIn} />
            <Route path="/singup" component={SignUp} />
            <Route path="/" component={App} />
    </Switch>
</Router>
, document.getElementById('root'));

