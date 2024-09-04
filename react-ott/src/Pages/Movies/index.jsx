import React from "react";
// Importing the components here
import Movies from "./Movies";
import {
  useMoviesContext,
  MoviesContextProvider,
} from "./MoviesContextProvider";

/**
 *
 * @returns Functional Component which wraps the Context to the child
 */
const MoviesContainer = () => {
  return (
    <MoviesContextProvider>
      <Movies />
    </MoviesContextProvider>
  );
};

export default MoviesContainer;
