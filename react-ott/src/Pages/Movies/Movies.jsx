import React, { Fragment } from "react";
//Importing the material ui components here
import Grid from "@mui/material/Grid2";
// Importing the components here
import SearchFilters from "./SearchFilters";
import MovieCards from "./MovieCards";
import { Typography } from "@mui/material";

/**
 *
 * @returns Functional Component which returns the Movies component
 */
const Movies = () => {
  return (
    <Fragment>
      <Grid container pb={4}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4">Advanced Search Filters...</Typography>
        </Grid>
      </Grid>
      <Grid container>
        {/* Rendering the Filters component here */}
        <Grid size={{ xs: 4 }} p={2}>
          <SearchFilters />
        </Grid>

        {/* Rendering the Movies here */}
        <Grid size={{ xs: 8 }} p={2}>
          <MovieCards />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Movies;
