import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./components/Course";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/course">
            <Course />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
