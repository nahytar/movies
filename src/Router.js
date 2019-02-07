import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieDescription from './MovieDescription/MovieDescription'
import Error from './Error'
import Home from './Home/Home';

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie_description/:movieId" component={MovieDescription} />
        <Route component={Error} />

      </Switch>

      </BrowserRouter>
    )
  }
}

export default Router;