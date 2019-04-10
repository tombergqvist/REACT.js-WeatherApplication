import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Search extends Component {

    state = {
        search: null
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        
    }

    handleClick = () => {
        this.props.onClick(this.state.search)
    }

    render (){
        return (
            <div>
                <input type="text" id="search-field" placeholder="location" onChange={this.handleChange}></input>
                <NavLink to={"/location/" + this.state.search} key={this.state.search}>
                    <button id="search-button" onClick={this.handleClick}>Search</button>
                </NavLink>
            </div>
        )
    }
}