import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark nav-bg" >
                    <NavLink className="navbar-brand" to="/">
                        React WeatherApp
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="link" to="/about">
                                    about
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}