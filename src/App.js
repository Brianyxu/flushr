import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";

import CreatePage from "./components/CreatePage";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";

Amplify.configure(awsmobile);

export const theme = {
  button: {
    border: {
      width: "4px"
    }
  },
  global: {
    colors: {
      brand: "#ccccff"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/create" component={CreatePage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
