import React from "react";
import { Box, Button, Grid, Heading } from "grommet";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <Button hoverIndicator="true" label="Main" />
      </Link>
      <Link to="/create">
        <Button hoverIndicator="true" label="Create" />
      </Link>
      <Link to="/results">
        <Button hoverIndicator="true" label="Results" />
      </Link>
    </Box>
    <Box
      gridArea="nav-end"
      background="brand"
      // elevation="medium"
      style={{ zIndex: "1" }}
    />
  </Grid>
);

export default AppBar;
