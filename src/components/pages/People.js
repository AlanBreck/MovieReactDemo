import React from "react";
import axios from "axios";

const token = "07035d621a52a158b9d7f82b7087fd8d";
const url = `https://api.themoviedb.org/3/person/popular?api_key=${token}&language=en-US`;

class People extends React.Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios.get(url).then(res => this.setState({ people: res.data.results }));
  }

  render() {
    console.log(this.state.people);
    return (
      <div className="row">
        {this.state.people.map(person => (
          <div key={person.id} className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{person.name}</h2>
                <p className="card-text">{person.known_for_department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default People;
