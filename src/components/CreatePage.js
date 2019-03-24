import React, { useState } from "react";
import { API } from "aws-amplify";
import { theme } from "../App";
import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";
import AppBar from "./AppBar";

function CreatePage(props) {
  // state = {
  //   newName: "",
  //   newLocation: "",
  //   newRating: ""
  // };

  const [newName, setNewName] = useState();
  const [newLocation, setNewLocation] = useState();
  const [newRating, setNewRating] = useState();

  const postLocations = async (name, location, rating) => {
    console.log("POST /locations myapi from create");
    let postObject = {
      body: {
        name: newName,
        location: newLocation,
        count: 1,
        rating: parseFloat(newRating)
      }
    };
    const response = await API.post("myapi", "/locations", postObject);
    alert(JSON.stringify(response, null, 2));
  };

  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar />
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex direction="row" align="center" justify="center">
            <Form>
              <FormField name="newName" label="Name">
                <TextInput
                  placeholder="Enter a name"
                  value={newName}
                  onChange={event => setNewName(event.target.value)}
                />
              </FormField>
              <FormField name="newLocation" label="Location">
                <TextInput
                  placeholder="Enter a location"
                  value={newLocation}
                  onChange={event => setNewLocation(event.target.value)}
                />
              </FormField>
              <FormField name="newRating" label="Rating">
                <TextInput
                  placeholder="Enter a rating 0-5"
                  value={newRating}
                  onChange={event => setNewRating(event.target.value)}
                />
              </FormField>
              <Button
                type="submit"
                primary
                hoverIndicator="true"
                onClick={() => postLocations(newName, newLocation, newRating)}
                label="Submit"
              />
            </Form>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default CreatePage;
