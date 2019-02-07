import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css"

class MovieCard extends React.Component {
   render = () => (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} />
      <Card.Body>
        <Card.Title><a href={`/movie_description/${this.props.movie.id}`}>{this.props.movie.title}</a></Card.Title>
        <Card.Text>Ranking: {this.props.movie.vote_average}</Card.Text>
        {
          this.props.addToFavorites != null ?
          <Button variant="dark" onClick={() => this.props.addToFavorites(this.props.movie)}>Agregar a favoritos</Button>
          :<Button variant="danger" onClick={() => this.props.removeFromFavorites(this.props.movie)}>Quitar de favoritos</Button>
        }
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
