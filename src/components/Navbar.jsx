import * as React from "react";
// Importing the Materail UI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/**
 *
 * @returns Functional Component returns the Navbar component
 */
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "500" }}>
            React New OTT Arrivals
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
