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

  const [results, setResults] = useState([getLocations().data]);

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
                  name: results[0].name,
                  rating: results[0].rating,
                  numRatings: results[0].count
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
