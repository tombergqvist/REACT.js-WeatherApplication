import React, { Component } from 'react';
import { getCurrent } from '../API/webapi'
import { NavLink } from 'react-router-dom'

export default class Start extends Component {

    state = {
        defaultLocation: this.props.location,
        location: [],
        details: []
    }

    componentDidMount = () => {
        getCurrent(this.state.defaultLocation).then((res) => {
            this.setState({
                location: res.location,
                details: res.current
            })
        })
    }

    handleClick = () => {
        this.props.onClick(this.state.location.name)
    }

    render() {
        if (this.state.location.name !== undefined) {
            return (
                <div>
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h2 className="card-title">
                                Current weather for {this.state.location.name}, {this.state.location.country}
                            </h2>
                            <img src={this.state.details.condition.icon} alt="Weather condition."></img>
                            <p>Temperature: <span className="temp">{this.state.details.temp_c} °C</span></p>
                            <p>Time: {this.state.location.localtime}</p>
                            <NavLink className="btn btn-primary"
                                to={"/location/" + this.state.location.name}
                                key={this.state.location.name}
                                onClick={this.handleClick}>
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}