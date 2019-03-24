import React, { Component } from "react";
import { theme } from "../App";
import { Box, Button, Form, FormField, Grid, Grommet, Heading } from "grommet";
import AppBar from "./AppBar";

class CreatePage extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar />
        </Box>
      </Grommet>
    );
  }
}

export default CreatePage;
