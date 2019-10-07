import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Counter from "./scenes/Counter";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/count" />
          </Route>
          <Route exact path="/count" component={Counter} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
