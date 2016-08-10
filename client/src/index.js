import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { App } from './components/app';
import { Navbar } from './components/navbar';
import { GaitTableContainer } from './components/table/GaitTableContainer';
import { Register } from './components/user/register';
import { Login } from './components/user/login';

// Add CSS files to bundle
require('../src/css/application.scss');



// Render application to DOM
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/GaitTable" component={GaitTableContainer} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
        </Route>
    </Router>
    ),document.getElementById('app')
);