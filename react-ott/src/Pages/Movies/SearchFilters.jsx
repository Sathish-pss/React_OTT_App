import React, { Fragment } from "react";
// Importing the Material UI Component here
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Importing the components here
import CustomTextField from "../../components/CustomTextField.jsx";
import { useMoviesContext } from "./MoviesContextProvider.jsx";

/**
 * Functional Component returns the Search filters
 */
const SearchFilters = () => {
  // Consuming the context values of Movies context using the custom page level hook
  const { filterFormik: formik } = useMoviesContext();
  return (
    <Box
      component={"div"}
      sx={{ border: "1px solid #e5e5e5", borderRadius: "10px", p: 1 }}
    >
      {/* Search by year form control section */}
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">Release year</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>

      {/* Search by IMDB Form control Section*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">IMDb ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>

      {/* Search by Genre form control section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>

      {/* Search by language form control section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>

      {/* Search by type form control section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">Title type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>

      {/* Sort by latest form control section */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-1"
        >
          <Typography variant="h6">Sort by latest</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTextField
            name={"start_year"}
            value={formik?.values?.start_year}
            type="number"
            placeholder={"Enter the start year"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default SearchFilters;
