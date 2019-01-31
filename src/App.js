import React, { Component } from "react";
import "./App.css";
import MovieList from "./MovieList/MovieList";

class App extends Component {
  parameters =
    "?api_key=0458c18c42ecfe84241c0d49265ddbd2&language=es-ES&page=1";

  constructor(props) {
    super(props);
    this.state = {
      populars: [],
      last: []
    };
  }

  componentWillMount() {
    fetch("https://api.themoviedb.org/3/movie/popular" + this.parameters)
      .then(response => response.json())
      .then(json => {
        this.setState({ populars: json.results.slice(0, 5) });
      });
    fetch("https://api.themoviedb.org/3/movie/now_playing" + this.parameters)
      .then(response => response.json())
      .then(json => {
        this.setState({ last: json.results.slice(0, 5) });
      });
  }

  render() {
    return (
      <div className="App">
        <MovieList title="Mas populares" movies={this.state.populars} />
        <MovieList title="Mas recientes" movies={this.state.last} />
      </div>
    );
  }
}

export default App;
