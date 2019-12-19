import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Movies from "./components/pages/Movies";
import People from "./components/pages/People";
import NoMatch from "./components/pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark text-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/people" activeClassName="active">
              People
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
