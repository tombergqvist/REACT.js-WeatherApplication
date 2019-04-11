import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Search extends Component {

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

    handleKeyUp = (e) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            this.props.history.push("/location/"+this.state.search)
        }
    }

    render (){
        return (
            <div>
                <input type="text" id="search-field" placeholder="location" onChange={this.handleChange} onKeyUp={this.handleKeyUp}></input>
                <NavLink to={"/location/" + this.state.search} key={this.state.search}>
                    <button id="search-button" onClick={this.handleClick}>Search</button>
                </NavLink>
            </div>
        )
    }
}

export default withRouter(Search)