import React, { Component } from 'react';
import { getForecast } from '../API/webapi'

export default class Details extends Component {

    state = {
        location: this.props.match.params.location,
        details: []
    }

    componentDidMount = () => {
        getForecast(this.state.location, 5).then((res) => {
            this.setState({
                details: res
            })
        })
    }

    render() {
        if (this.state.details.location !== undefined) {
            console.log(this.state.details)

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
                            {/* <img src={this.state.details.condition.icon} alt="Weather condition."></img>
                            <p>Temperature: <span className="temp">{this.state.details.temp_c} °C</span></p>
                            <p>Time: {this.state.location.localtime}</p> */}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h2>Sorry! We could not find that location.</h2>
            </div>
        )
    }
}