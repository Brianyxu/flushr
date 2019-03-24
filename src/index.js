import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.css";
import App from "./App";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import New from "./new";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/new/" component={New} />
    </div>
  </Router>
);
=======
import App from "./App";
import * as serviceWorker from "./serviceWorker";

>>>>>>> 635052a8e5fabbcb17d34c2955690e82c6dd0686
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
