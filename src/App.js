import React, { Component } from 'react'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Search from './components/pages/search'
import Start from './components/pages/start'
import Details from './components/pages/details'
import * as Favorites from './components/Cache/cacheFavorites'
import FavoriteList from './components/pages/favoriteList';


export default class App extends Component {

  constructor() {
    super()

    this.state = {
      location: undefined,
      favorites: undefined
    }    
  }

  addToFavorites = (loc) => {
    Favorites.save(loc)
    this.setState({
      favorites: Favorites.load()
    })
  }

  setLocation = (loc) => {
    this.setState({
      location: loc
    })
  }

  componentDidMount = () => {
    let favorites = Favorites.load()
    if (favorites !== undefined) {
      this.setState({
        favorites: favorites
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search
            onClick={this.setLocation}
          />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Start
                isAuthed={true}
                // location={this.state.defaultLocation}
                setDefaultLocation={this.state.setDefaultLocation}
                onClick={this.setLocation}
              />
            )}
          />
          <Route
            path="/location/:location"
            render={(props) => (
              <Details
                {...props}
                isAuthed={true}
                addToFavorites={this.addToFavorites}
              />
            )}
          />
        </Switch>
        <FavoriteList
          favorites={this.state.favorites}
        />
      </BrowserRouter>
    )
  }
}