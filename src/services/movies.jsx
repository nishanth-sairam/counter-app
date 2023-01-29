import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movieCurrent = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movieCurrent });
  };
  render() {
    if (this.state.movies.length === 0) {
      return <h2>No Movies in DataBase</h2>;
    }
    return (
      <div className="m-5">
        <h2>showing moives {this.state.movies.length} in the dataBase</h2>
        <table className="table fs-3">
          <thead>
            <tr>
              <th>Tilte</th>
              <th>Genre</th>
              <th>NumberInStock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
