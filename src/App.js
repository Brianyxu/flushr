import React, { Component } from "react";
import Amplify, { API } from "aws-amplify";
import awsmobile from "./aws-exports";

import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";
import AppBar from "./components/AppBar";
import CreatePage from "./components/CreatePage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }
  // state = { mainNav: true, createNav: false, resultNav: false };

  getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations");
    alert(JSON.stringify(response, null, 2));
  };

  postLocations = async () => {
    console.log("POST /locations myapi");
    let postObject = {
      body: {
        name: "random",
        location: "test",
        count: 1,
        rating: 4.5
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
        location: "33.2148,-87.5452",
        rating: 4.5
      }
    };
    const response = await API.put("myapi", "/locations", putObject);
    alert(JSON.stringify(response, null, 2));
  };

  render() {
    // const { mainNav, createNav, results } = this.state;
    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex direction="row" align="center" justify="center">
              <Form>
                <FormField name="location" label="Location">
                  <TextInput
                    placeholder="Enter a location"
                    value={this.state.location}
                    onChange={event =>
                      this.setState({ location: event.target.value })
                    }
                  />
                </FormField>
                <Button type="submit" primary label="Submit" />
              </Form>
              <Button type="submit" label="Or find bathrooms near you!" />
            </Box>
          </Box>
          <Box direction="row" flex align="center" justify="center">
            <Button
              hoverIndicator="true"
              onClick={this.getLocations}
              label="GET Test"
            />
            <Button
              hoverIndicator="true"
              onClick={this.postLocations}
              label="POST Test"
            />
            <Button
              hoverIndicator="true"
              onClick={this.putLocations}
              label="PUT Test"
            />
          </Box>
        </Box>
        <BrowserRouter>
          <Switch>
            <Route path="/create" component={CreatePage} />
            <Route path="/main" component={App.render} />
          </Switch>
        </BrowserRouter>
      </Grommet>
    );
  }
}

export default App;
