import React, { Component } from 'react';
import { getCurrent, getLocation } from '../API/webapi'
import { NavLink } from 'react-router-dom'

export default class Start extends Component {

    constructor() {
        super()
        this.state = {
            defaultLocation: "Stockholm",
            location: undefined,
            details: [],
            geoLocated: false
        }

    }

    setLocation = () => {
        getCurrent(this.state.defaultLocation).then(res => {
            this.setState({
                location: res.location,
                details: res.current
            }, () => {
            })
        })
    }

    componentDidMount = () => {
        getLocation(res => {
            let success = false
            if (res !== undefined && res.info.statuscode === 0) {
                if(res.results[0].locations[0] !== undefined && res.results[0].locations[0].adminArea5 !== ""){
                    success = true
                }
            }

            if(success) {
                this.setState({
                    defaultLocation: res.results[0].locations[0].adminArea5,
                    geoLocated: true
                }, () => this.setLocation())
            }
            else{
                this.setLocation()
            }
        })
    }

    handleClick = () => {
        this.props.onClick(this.state.location.name)
    }

    render() {
        if (this.state.location !== undefined) {
            return (
                <div>

                    <div className="card bg-light mb-3 card-hover">
                        <NavLink className="start-link"
                            to={"/location/" + this.state.location.name}
                            key={this.state.location.name}
                            onClick={this.handleClick}>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Current weather for {this.state.location.name}, {this.state.location.country}
                                </h2>
                                <img src={this.state.details.condition.icon} alt="Weather condition."></img>
                                <p>Temperature: <span className="temp">{this.state.details.temp_c} °C</span></p>
                                <p>Time: {this.state.location.localtime}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )
        }
        return null
    }
}