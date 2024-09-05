import React from "react";
// Importing the material ui components here
import { Paper } from "@mui/material";
// Importing the components here
import Movies from "./Movies";
import { MoviesContextProvider } from "./MoviesContextProvider";

/**
 *
 * @returns Functional Component which wraps the Context to the child
 */
const MoviesContainer = () => {
  return (
    <MoviesContextProvider>
      <Paper elevation={0} sx={{ px: 3 }}>
        <Movies />
      </Paper>
    </MoviesContextProvider>
  );
};

export default MoviesContainer;
