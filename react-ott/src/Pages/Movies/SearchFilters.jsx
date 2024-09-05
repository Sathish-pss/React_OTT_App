import React, { Fragment } from "react";
// Importing the Material UI Component here
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
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
          <Grid container spacing={2}>
            <Grid size={{ xs: 5 }}>
              <CustomTextField
                name={"start_year"}
                value={formik?.values?.start_year}
                type="number"
                placeholder={"e.g. 1975"}
                onChange={formik?.handleChange}
                fullWidth
              />
            </Grid>
            {"-"}
            <Grid size={{ xs: 5 }}>
              <CustomTextField
                name={"end_year"}
                value={formik?.values?.end_year}
                type="number"
                placeholder={"e.g. 2020"}
                onChange={formik?.handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <br />

          <Typography variant="body1" fontSize={"small"} pt={1}>
            Search movies by entering the start and end years
          </Typography>
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
          <Grid container spacing={2}>
            <Grid size={{ xs: 5 }}>
              <CustomTextField
                name={"min_imdb"}
                value={formik?.values?.min_imdb}
                type="number"
                placeholder={"e.g: 1.0"}
                onChange={formik?.handleChange}
                fullWidth
              />
            </Grid>
            {"-"}
            <Grid size={{ xs: 5 }}>
              <CustomTextField
                name={"max_imdb"}
                value={formik?.values?.max_imdb}
                type="number"
                placeholder={"e.g: 10.0"}
                onChange={formik?.handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
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
            name={"genre"}
            value={formik?.values?.genre}
            type="text"
            placeholder={"e.g. Action, Adventure, crime"}
            onChange={formik?.handleChange}
            fullWidth
          />

          <br />

          <Typography variant="body1" pt={1} fontSize={"small"}>
            Search Movies by their genre
          </Typography>
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
            name={"language"}
            value={formik?.values?.language}
            type="text"
            placeholder={"e.g. English, Spanish, French etc"}
            onChange={formik?.handleChange}
            fullWidth
          />
          <br />

          <Typography variant="body1" pt={1} fontSize={"small"}>
            Search movies by languages
          </Typography>
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
            name={"type"}
            value={formik?.values?.type}
            type="text"
            placeholder={"e.g. Movies, TV Shows, Series etc"}
            onChange={formik?.handleChange}
            fullWidth
          />

          <br />

          <Typography variant="body1" fontSize={"small"} pt={1}>
            Search movies by type and titles
          </Typography>
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
            name={"sort"}
            value={formik?.values?.sort}
            type="text"
            placeholder={"e.g: Latest"}
            onChange={formik?.handleChange}
            fullWidth
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default SearchFilters;
