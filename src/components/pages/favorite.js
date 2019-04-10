import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Favorite extends Component {

    render (){
        return (
            <div>
                <div>
                    <div className="card bg-light mb-3 card-hover favorite-card">
                        <NavLink className="start-link"
                            to={"/location/" + this.props.location.name}
                            key={this.props.location.name}>
                            <div className="card-body">
                                <h4 className="card-title">
                                   {this.props.location.name}, {this.props.location.country}
                                </h4>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}