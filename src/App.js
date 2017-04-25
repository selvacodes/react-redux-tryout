import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Die React</h2>
        </div>
        <UserList />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
