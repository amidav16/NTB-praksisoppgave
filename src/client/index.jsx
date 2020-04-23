import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NotFound from "./notfound.jsx";
import HomePage from "./homepage.jsx";
import Navbar from "./navbar.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../public/style.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
