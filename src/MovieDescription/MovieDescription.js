import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import "./MovieDescription.css";

class MovieDescription extends React.Component {
  state = {
    movie: null
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0458c18c42ecfe84241c0d49265ddbd2&language=es-ES`
    )
      .then(response => response.json())
      .then(movie => this.setState({ movie }));
  }
  render = () => (
    <div>
      <h1> {this.state.movie ? this.state.movie.title : "Cargando"}</h1>
      <Container>
        <Row>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                this.state.movie ? this.state.movie.poster_path : ""
              }`}
            />
          </div>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Descripción</Card.Title>
              <Card.Text>
                {this.state.movie ? this.state.movie.overview : ""}
              </Card.Text>
              <Card.Title>Producción</Card.Title>
              <Card.Text>
                {this.state.movie
                  ? this.state.movie.production_companies
                      .map(company => company.name)
                      .join(", ")
                  : ""}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDescription;
