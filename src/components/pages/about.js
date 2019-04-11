import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                <h1 className="card-title">React.js Weather</h1>
                <p>Created for educational purposes with React.js using geolocation and webapis.</p>
                <p>- Tom Bergqvist</p>
                </div>
            </div>
        )
    }
}