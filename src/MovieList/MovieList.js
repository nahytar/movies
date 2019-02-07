import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

class MovieList extends React.Component {
  render = () => (
    <div>
      <h3>{this.props.title}</h3>
      <Row className="movie-list">
        {this.props.movies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
            addToFavorites={this.props.addToFavorites}
            removeFromFavorites={this.props.removeFromFavorites}
          />
        ))}
      </Row>
    </div>
  );
}

export default MovieList;
