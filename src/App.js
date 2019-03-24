import React, { Component } from "react";
import Amplify, { API } from "aws-amplify";
import awsmobile from "./aws-exports";

import { Box, Button, Form, FormField, Grid, Grommet, Heading } from "grommet";

Amplify.configure(awsmobile);

const theme = {
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

const AppBar = props => (
  <Grid
    rows={["xsmall"]}
    columns={["small", "large", "small"]}
    areas={[
      { name: "head", start: [0, 0], end: [0, 0] },
      { name: "nav", start: [1, 0], end: [1, 0] },
      { name: "nav-end", start: [2, 0], end: [2, 0] }
    ]}
  >
    <Box
      gridArea="head"
      tag="header"
      direction="row"
      align="center"
      justify="evenly"
      background="brand"
      // elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    >
      <Heading level="3">Flushr</Heading>
    </Box>
    <Box
      gridArea="nav"
      direction="row"
      align="center"
      justify="evenly"
      background="brand"
      // elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    >
      <Button
        // active=
        hoverIndicator="true"
        onClick={() =>
          this.setState(() => ({
            mainNav: true,
            createNav: false,
            resultNav: false
          }))
        }
        label="Main"
      />
      <Button
        hoverIndicator="true"
        onClick={() =>
          this.setState(() => ({
            mainNav: false,
            createNav: true,
            resultNav: false
          }))
        }
        label="Create"
      />
    </Box>
    <Box
      gridArea="nav-end"
      background="brand"
      // elevation="medium"
      style={{ zIndex: "1" }}
    />
  </Grid>
);

class App extends Component {
  state = { mainNav: true, createNav: false, resultNav: false };

  getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations/Ferg");
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
    const { mainNav, createNav, results } = this.state;
    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex direction="row" align="center" justify="center">
              <Form>
                <FormField name="location" label="Location" />
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
      </Grommet>
    );
  }
}

export default App;
