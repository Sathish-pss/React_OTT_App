import React, { Fragment } from "react";
//Importing the material ui components here
import Grid from "@mui/material/Grid2";
// Importing the components here
import SearchFilters from "./SearchFilters";
import MovieCards from "./MovieCards";
import { Button, Typography } from "@mui/material";
import { useMoviesContext } from "./MoviesContextProvider";

/**
 *
 * @returns Functional Component which returns the Movies component
 */
const Movies = () => {
  // Consuming the context values of the Movies using the custom page level hook
  const { filterFormik: formik } = useMoviesContext();

  return (
    <Fragment>
      <Grid container pb={4}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4">Advanced Search Filters...</Typography>
        </Grid>
      </Grid>

      {/* Rendering the button here */}
      <Grid container pl={1}>
        <Grid size={{ xs: 12 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Search...
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        {/* Rendering the Filters component here */}
        <Grid size={{ xs: 4 }} p={1}>
          <SearchFilters />
        </Grid>

        {/* Rendering the Movies here */}
        <Grid size={{ xs: 8 }} p={1}>
          <MovieCards />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Movies;
