import React, { useState } from "react";
import { API } from "aws-amplify";
import { theme } from "../App";
import { Box, DataTable, Grommet, Text } from "grommet";
import AppBar from "./AppBar";

function ResultPage(props) {
  const getLocations = async () => {
    console.log("GET /locations myapi");
    const response = await API.get("myapi", "/locations");
    return response;
    // alert(JSON.stringify(response, null, 2));
  };

  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar />
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex direction="row" align="center" justify="center">
            <DataTable
              columns={[
                { property: "name", header: <Text>Name</Text>, primary: true },
                { property: "rating", header: <Text>Rating</Text> },
                { property: "numRatings", header: <Text># of Ratings</Text> }
              ]}
              data={[
                {
                  name: "Ferg",
                  rating: 4.0,
                  numRatings: 10
                  // name: await getLocations(data => data[0].name),
                  // rating: await getLocations(data => data[0].rating),
                  // numRatings: await getLocations(data => data[0].count)
                }
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default ResultPage;
