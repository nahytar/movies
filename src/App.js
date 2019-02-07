import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import Navigation from "./Navigation/Navigation";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Router></Router>
      </div>
    );
  }
}

export default App;
