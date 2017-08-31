import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Section from './Components/Sections/section.jsx';
import Default from './Components/Default/default.jsx';
import Game from './Components/game.jsx';
import RocketLeague from "./Components/Games/rocketleague.jsx";
import CounterStrike from "./Components/Games/counterstrike.jsx";
import Heartstone from "./Components/Games/heartstone.jsx";

export default class Index extends React.Component {

    render() {
        const title = "How2Uninstall.com";
        return (
            <Router>
                <div className="container">
                    <Link to="/">
                        <Section title={title} type="header" />
                    </Link>
                        <div className="panel panel-default">
                            <div className="panel-header">
                                <h1>Please select your game!</h1>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                       <Link to="/rocketleague">
                                            <Game name="rocketleague" />
                                        </Link> 
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <Link to="/counterstrike">
                                            <Game name="counterstrike" />
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <Link to="/heartstone">
                                            <Game name="heartstone" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="content">
                        <Route exact path="/" component={Default}/>
                        <Route path="/rocketleague" component={RocketLeague}/>
                        <Route path="/counterstrike" component={CounterStrike}/>
                        <Route path="/heartstone" component={Heartstone}/>
                    </div>
                    <Link to="/">
                        <Section title={title} type="footer" />
                    </Link>
                </div>
            </Router>
        );
    }
}
