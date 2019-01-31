import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css"

class MovieCard extends React.Component {
  render = () => (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} />
      <Card.Body>
        <Card.Title><a href={`/movie_description/${this.props.movieId}`}>{this.props.title}</a></Card.Title>
        <Card.Text>Ranking: {this.props.ranking}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
