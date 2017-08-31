const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './app/index.jsx';

class App extends React.Component {
    
    render(){
        return(
           <Index />
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Route path="/" component={App} />
	</Router>,
root);
/*
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>,
root);*/