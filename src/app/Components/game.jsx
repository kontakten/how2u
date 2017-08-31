import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import rocketleague from '../assets/logos/rocketleague.png';
import counterstrike from '../assets/logos/counterstrike.jpg';
import heartstone from '../assets/logos/hs.png';

export default class Game extends React.Component {
    render() {
        const name = this.props.name;
        var gameLink;
        if (name === "rocketleague") {
            gameLink = <img className="img-responsive" src={rocketleague} />;
        } else if (name === "counterstrike") {
            gameLink = <img className="img-responsive" src={counterstrike} />;
        } else {
            gameLink = <img className="img-responsive" src={heartstone} />;
        }
        return (
           gameLink
        );
    }
}