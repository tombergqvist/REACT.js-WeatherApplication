import React, { Component } from 'react';
import Favorite from './favorite'

export default class FavoriteList extends Component {

    render() {
        if (!this.props.favorites) return null

        return (
            <div>
                <div>
                    {this.props.favorites.map(favorite => {
                        return (<Favorite
                            location={favorite}
                            key={favorite.name}
                        ></Favorite>)
                    })}
                </div>
            </div>
        )
    }
}