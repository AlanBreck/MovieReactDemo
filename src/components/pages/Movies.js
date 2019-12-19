import React from "react";
import axios from "axios";

const token = "07035d621a52a158b9d7f82b7087fd8d";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}&language=en-US`;

class Movies extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get(url).then(res => this.setState({ movies: res.data.results }));
  }

  render() {
    return (
      <div className="row">
        {this.state.movies.map(movie => (
          <div key={movie.id} className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
