import React from "react";
import { API } from "aws-amplify";
import { theme } from "../App";
import { Box, Button, Form, FormField, Grommet } from "grommet";
import AppBar from "./AppBar";

function MainPage(props) {
  const getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations");
    alert(JSON.stringify(response, null, 2));
  };

  const postLocations = async () => {
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

  const putLocations = async () => {
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
            onClick={() => getLocations()}
            label="GET Test"
          />
          <Button
            hoverIndicator="true"
            onClick={() => postLocations()}
            label="POST Test"
          />
          <Button
            hoverIndicator="true"
            onClick={() => putLocations()}
            label="PUT Test"
          />
        </Box>
      </Box>
    </Grommet>
  );
}

export default MainPage;
