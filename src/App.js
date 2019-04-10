import React, { Component } from 'react'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Search from './components/pages/search'
import Start from './components/pages/start'
import Details from './components/pages/details'

export default class App extends Component {

  state = {
    defaultLocation: "Stockholm",
    location: null
  }

  componentDidMount() {

  }

  details = (loc) => {
    this.setState({
      location: loc
    })
  }

  onSearch = (loc) => {
      this.setState({
        location: loc
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search 
            onClick={this.onSearch}
          />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Start
                isAuthed={true}
                location={this.state.defaultLocation}
                onClick={this.details}
              />
            )}
          />
          <Route
            path="/location/:location"
            render={(props) => (
              <Details
                {...props}
                isAuthed={true}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}