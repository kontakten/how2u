import React from 'react';
import ReactDOM from 'react-dom';

export default class Section extends React.Component {
    render() {
        return (
        	<div className={this.props.type}>
	            <h1 type={this.props.type}>
	                {this.props.title}
	            </h1>
            </div>
        );
    }
}
