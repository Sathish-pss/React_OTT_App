import React, { useState, useEffect, createContext, useContext } from "react";

//Creating the context here
const MoviesContext = createContext(null);

/**
 * @returns Functional Component which provides the Context values to the child
 */

const MoviesContextProvider = ({ children }) => {
  return <MoviesContext.Provider>{children}</MoviesContext.Provider>;
};

//Custom hook to provide the context values to the children

function useMoviesContext() {
  try {
    return useContext(MoviesContext);
  } catch (error) {
    // Handle error here, such as logging or displaying an error message
    console.error("Error using Movies Context:", error);
    // Return a default value or fallback behavior if necessary
    return null;
  }
}

export { useMoviesContext, MoviesContextProvider };
