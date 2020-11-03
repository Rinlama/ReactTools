import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./component/home/Home";
import Login from "./component/auth/login/LogIn";
import Signup from "./component/auth/signup/Signup";
import MyStore from "./component/store/MyStore";
import { connect } from "react-redux";

function App(props) {
  const { isLoggedIn } = props;

  const PrivateRoute = ({ ...rest }) =>
    isLoggedIn ? <Route {...rest} /> : <Redirect to="/" />;

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/login" render={(props) => <Login />} />
          <Route exact path="/signup" render={(props) => <Signup />} />
          <PrivateRoute exact path="/store" render={(props) => <MyStore />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default connect((state) => state)(App);
