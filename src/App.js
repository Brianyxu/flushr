import React, { Component } from "react";
import Amplify, { Storage, API } from "aws-amplify";
import awsmobile from "./aws-exports";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

Amplify.configure(awsmobile);

class App extends Component {
  getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations");
    alert(JSON.stringify(response, null, 2));
  };

  postLocations = async () => {
    console.log("POST /locations myapi");
    let postObject = {
      body: {
        name: "Ferg",
        location: "33.2148,-87.5452",
        rating: 3.0,
        count: 10
      }
    };
    const response = await API.post("myapi", "/locations", postObject);
    alert(JSON.stringify(response, null, 2));
  };

  putLocations = async () => {
    console.log("PUT /locations myapi");
    let putObject = {
      body: {
        name: "Ferg",
        rating: 4.5
      }
    };
    const response = await API.put("myapi", "/locations", putObject);
    alert(JSON.stringify(response, null, 2));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={this.getLocations}>GET Test</button>
          {/* <button onClick={this.getLocations}>
            <Router>
              <Link to="/new/">GET Test</Link>
              <Route path="/new/" component="New" />
            </Router>
          </button> */}
          <button onClick={this.postLocations}>POST Test</button>
          <button onClick={this.putLocations}>PUT Test</button>
        </header>
      </div>
    );
  }
}

export default App;
