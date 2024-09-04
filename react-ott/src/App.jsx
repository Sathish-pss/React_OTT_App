import { Fragment } from "react";
// Importing the external libraries
import { Route, Routes } from "react-router-dom";
// Importing the custom components here
import MoviesContainer from "./Pages/Movies";
import Navbar from "./components/Navbar";
import AppLayout from "./layouts/AppLayout";

/**
 *
 * @returns Returns the Main App Component
 */
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MoviesContainer />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
