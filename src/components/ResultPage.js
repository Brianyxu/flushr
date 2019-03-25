import React, { useState } from "react";
import { API } from "aws-amplify";
import { theme } from "../App";
import { Box, Button, DataTable, Grommet, Text } from "grommet";
import AppBar from "./AppBar";

function ResultPage(props) {
  const getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations");
    return response;
  };

  const [results, setResults] = useState([
    { name: "None", rating: "-1", count: "-1" }
  ]);

  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar />
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex direction="row" align="center" justify="center">
            <Button
              primary
              hoverIndicator="true"
              onClick={() =>
                getLocations().then(data => {
                  setResults(data.data);
                })
              }
              label="Update"
            />
            <DataTable
              columns={[
                { property: "name", header: <Text>Name</Text>, primary: true },
                { property: "rating", header: <Text>Rating</Text> },
                { property: "numRatings", header: <Text># of Ratings</Text> }
              ]}
              data={results.map(result => {
                return {
                  name: result.name,
                  rating: result.rating,
                  numRatings: result.count
                };
              })}
            />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default ResultPage;
