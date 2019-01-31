import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "./App.css";
import MovieList from "./MovieList/MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      last: [],
      categories: []
    };
  }

  _fetchMovies(orderBy, category, ranking) {
    let url = "https://api.themoviedb.org/3/discover/movie";
    url += "?api_key=0458c18c42ecfe84241c0d49265ddbd2&language=es-ES&page=1";
    url += "&include_adult=false&include_video=false";
    url += `&sort_by=${orderBy}.desc`;
    if (category) {
      url += "&with_genres=" + category;
    }
    if (ranking) {
      url += "&vote_average.gte=" + ranking;
      url += "&vote_average.lte=" + ++ranking;
    }

    return fetch(url);
  }

  _findLast(category, ranking) {
    this._fetchMovies("release_date", category, ranking)
      .then(response => response.json())
      .then(json => this.setState({ last: json.results.slice(0, 5) }));
  }

  _findPopular(category, ranking) {
    this._fetchMovies("popularity", category, ranking)
      .then(response => response.json())
      .then(json => this.setState({ popular: json.results.slice(0, 5) }));
  }

  _findCategories() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=0458c18c42ecfe84241c0d49265ddbd2&language=es-ES"
    )
      .then(response => response.json())
      .then(json => this.setState({ categories: json.genres }));
  }

  componentWillMount() {
    this._findCategories();
    this._findLast();
    this._findPopular();
  }

  changeCategory(category) {
    this._findLast(category);
    this._findPopular(category);
  }

  changeRanking(ranking) {
    this._findLast(null, ranking);
    this._findPopular(null, ranking);
  }

  render() {
    return (
      <div className="App">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.state.categories.map(category => (
              <Dropdown.Item
                eventKey={category.id}
                key={category.id}
                onSelect={category => this.changeCategory(category)}
              >
                {category.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Ranking
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {[1,2,3,4,5,6,7,8,9].map(ranking => (
              <Dropdown.Item
                eventKey={ranking}
                key={ranking}
                onSelect={ranking => this.changeRanking(ranking)}
              >
                {ranking}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <MovieList title="Mas populares" movies={this.state.popular} />
        <MovieList title="Mas recientes" movies={this.state.last} />
      </div>
    );
  }
}

export default App;
