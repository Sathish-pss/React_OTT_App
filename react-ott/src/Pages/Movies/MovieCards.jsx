import React, { Fragment } from "react";
// Importing the Material UI Components here
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
import { useMoviesContext } from "./MoviesContextProvider";

/**
 * @returns Functional component returns the Movies Card
 */

const MovieCards = () => {
  // Consuming the context values of Movies using the custom page level hook
  const { moviesData } = useMoviesContext();
  return (
    <Box
      component={"div"}
      sx={{ border: "1px solid #e5e5e5", borderRadius: "10px", p: 1 }}
    >
      {/* Destructuring the movies data here */}
      {moviesData?.length ? (
        moviesData?.map((data, index) => (
          <Grid
            container
            p={3}
            sx={{ border: "1px solid #e5e5e5", mb: 1, borderRadius: "7px" }}
          >
            <Grid size={{ xs: 12 }}>
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                {/* Movie image */}
                <Box
                  component={"img"}
                  alt="No Image Available"
                  height={"auto"}
                  width={"100px"}
                  src={data?.imageurl[0]}
                  sx={{ border: "1px solid #e5e5e5" }}
                />

                {/* Movie Names and Genre section */}
                <Stack direction={"column"} justifyContent={"start"}>
                  <Typography variant="h6">{data?.title}</Typography>
                  {/* Year and Genre section */}
                  <Stack direction={"row"} gap={2}>
                    {/* Year */}
                    <Typography variant="body2">{data?.released}</Typography>
                    {/* Genre */}
                    <Typography>
                      {data?.genre?.map((data, index) => (
                        <Typography
                          sx={{
                            textAlign: "center",
                            m: 0.5,
                            p: 0.2,
                            fontWeight: "700",
                            fontSize: "12px",
                            borderRadius: "12px",
                            backgroundColor: "orangered",
                            color: "#fff",
                          }}
                        >
                          {data}
                        </Typography>
                      ))}
                    </Typography>
                  </Stack>
                  {/* Rating IMDB */}
                  <Stack direction={"row"} alignItems={"center"}>
                    <StarIcon sx={{ pr: 1, color: "orange" }} />
                    <Typography variant="body1">
                      <span>IMDb rating: </span> {data?.imdbrating}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            {/* Synopsis section */}
            <Grid size={{ xs: 12 }} mt={1}>
              <Typography variant="body1" fontSize={"small"}>
                {data?.synopsis}
              </Typography>
            </Grid>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" textAlign={"center"}>
          No Movies available now
        </Typography>
      )}
    </Box>
  );
};
export default MovieCards;
