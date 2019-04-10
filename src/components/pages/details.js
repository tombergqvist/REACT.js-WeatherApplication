import React, { Component } from 'react';
import { getForecast } from '../API/webapi'

export default class Details extends Component {

    state = {
        details: [],
        error: "Sorry! We could not find the location."
    }

    updateState = (loc) => {
        console.log("UpdateState(): " + loc)

        getForecast(loc, 5).then(res => {
            this.setState({
                details: res
            })
        })
    }

    componentWillMount = () => {
        this.updateState(this.props.match.params.location)
    }

    componentWillReceiveProps = (props) => {
        this.updateState(props.match.params.location)
    }

    render() {
        console.log("RENDER()")
        if (this.state.details.location !== undefined) {
            let days = this.state.details.forecast.forecastday.map((day) => {
                return (
                    <div key={day.date}>
                        <div className="forecast">
                            <div className="row">
                                <div className="col-sm">
                                    <h5>{day.date}</h5>
                                    <img src={day.day.condition.icon} alt={day.day.condition.text}></img>
                                    <p>{day.day.condition.text}</p>
                                </div>
                                <div className="col-sm">
                                    <p>Max temperature: <span className="temp">{day.day.maxtemp_c} °C</span></p>
                                    <p>Min temperature: <span className="temp">{day.day.mintemp_c} °C</span></p>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            })
            return (
                <div>
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h2 className="card-title">
                                Forecast for {this.state.details.location.name}, {this.state.details.location.country}
                            </h2>
                            {days}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h5>{this.state.error}</h5>
            </div>
        )
    }
}