import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
// Importing the external libraries
import axios from "axios";
import { useFormik } from "formik";
// Importing the custom components here

//Initializing the form values here
const initialValues = {
  start_year: "",
  end_year: "",
  min_imdb: "",
  max_imdb: "",
  genre: "",
  language: "",
  type: "",
  sort: "",
  page: 1,
};

//Creating the context here
const MoviesContext = createContext(null);

/**
 * @returns Functional Component which provides the Context values to the child
 */

const MoviesContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]); // State to set the movies data here
  // Initializing the formik for the filter here
  const filterFormik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  /**
   * UseEffect hook to fetch the data
   */
  // useEffect(() => {
  //   fetchMoviesDetails();
  // }, []);

  // console.log("API KEY", import.meta.env.RAPID_API_KEY);
  /**
   * Function to fetch the movies data from the rapid api
   */
  const fetchMoviesDetails = async () => {
    const options = {
      method: "GET",
      url: "https://ott-details.p.rapidapi.com/advancedsearch",
      params: {
        start_year: "1970",
        end_year: "2020",
        min_imdb: "6",
        max_imdb: "7.8",
        genre: "action",
        language: "english",
        type: "movie",
        sort: "latest",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": "e176f5a825mshc970e0079f9c030p192b95jsnfbbd373f5cc4",
        "x-rapidapi-host": "ott-details.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      if (response) {
        setMoviesData(response?.data?.results); // Setting the movies data here
      } else {
        setMoviesData([]);
      }
    } catch (error) {
      console.error("API ERR", error);
    }
  };

  console.log("Movies Array", moviesData);

  return (
    <MoviesContext.Provider value={{ filterFormik, moviesData }}>
      {children}
    </MoviesContext.Provider>
  );
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
