import React, { Component } from "react";
import { API } from "aws-amplify";
import { theme } from "../App";
import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";
import AppBar from "./AppBar";

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newLocation: "",
      newRating: ""
    };
  }

  postLocations = async (name, location, rating) => {
    console.log("POST /locations myapi from create");
    let postObject = {
      body: {
        name: name,
        location: location,
        count: 1,
        rating: parseFloat(rating)
      }
    };
    const response = await API.post("myapi", "/locations", postObject);
    alert(JSON.stringify(response, null, 2));
  };

  render() {
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
                    value={this.state.newName}
                    onChange={event =>
                      this.setState({ newName: event.target.value })
                    }
                  />
                </FormField>
                <FormField name="newLocation" label="Location">
                  <TextInput
                    placeholder="Enter a location"
                    value={this.state.newLocation}
                    onChange={event =>
                      this.setState({ newLocation: event.target.value })
                    }
                  />
                </FormField>
                <FormField name="newRating" label="Rating">
                  <TextInput
                    placeholder="Enter a rating 0-5"
                    value={this.state.newRating}
                    onChange={event =>
                      this.setState({ newRating: event.target.value })
                    }
                  />
                </FormField>
                <Button
                  type="submit"
                  primary
                  hoverIndicator="true"
                  onClick={this.postLocations(
                    this.state.newName,
                    this.state.newLocation,
                    this.state.newRating
                  )}
                  label="Submit"
                />
              </Form>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default CreatePage;
