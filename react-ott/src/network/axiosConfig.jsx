// Importing the External Libraries
import axios from "axios";

/**
 * Creating an instance of the Axios here
 */
const apiClient = axios.create({
  baseURL: "https://ott-details.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.RAPID_API_KEY,
    "x-rapidapi-host": import.meta.env.RAPID_API_HOST_KEY,
  },
});

export default apiClient;
