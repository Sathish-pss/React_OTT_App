import React, { Fragment } from "react";
// Importing the Material UI Components here
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";

/**
 * @returns Functional component returns the Movies Card
 */

const MovieCards = () => {
  return (
    <Box
      component={"div"}
      sx={{ border: "1px solid #e5e5e5", borderRadius: "10px", p: 1 }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Stack direction={"row"} alignItems={"center"}>
            {/* Movie image */}
            <Box
              component={"img"}
              alt="movie"
              height={"auto"}
              width={"100px"}
            />

            <Stack direction={"column"} justifyContent={"start"}>
              <Typography>Movie Name</Typography>
              <Stack direction={"row"}>
                {/* Year */}
                <Typography>2012</Typography>
                {/* Genre */}
                <Typography>Adventure</Typography>
              </Stack>
              {/* Rating IMDB */}
              <Typography>
                <StarIcon fontSize="small" color="orange" sx={{ pr: 1 }} /> {""}{" "}
                7.1
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Synopsis section */}
        <Grid size={{ xs: 12 }}>
          <Typography>Synopise</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MovieCards;
