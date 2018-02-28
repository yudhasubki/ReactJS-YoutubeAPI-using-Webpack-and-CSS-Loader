import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Popular from './containers/Popular';
import NavigationBar from './components/Header/navbar';

const RouteConfig = () => (
    <Router>
        <div>
            <NavigationBar />
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Popular} />
        </div>
    </Router>
);

ReactDOM.render(<RouteConfig/>,document.getElementById('App'));