import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

class MovieList extends React.Component {
  render = () => (
    <div>
      <h3>{this.props.title}</h3>
      <Row>
        {this.props.movies.map(movie => (
          <MovieCard
            title={movie.title}
            image={movie.poster_path}
            key={movie.id}
          />
        ))}
      </Row>
    </div>
  );
}

export default MovieList;
