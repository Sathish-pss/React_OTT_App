import React from "react";
// Import external libraries
import { Outlet } from "react-router-dom";
// Importing the Components here
import Navbar from "../components/Navbar";

// Add some basic styling
const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const navbarStyle = {
  position: "sticky",
  top: 0,
};

const contentStyle = {
  flexGrow: 1, // Make sure content takes up remaining space
  paddingTop: "20px", // Adjust based on the height of the Navbar
};

export default function AppLayout() {
  return (
    <div style={layoutStyle}>
      {/* Rendering the Navbar component here */}
      <div style={navbarStyle}>
        <Navbar />
      </div>

      {/* Rendering of child elements below the Navbar */}
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
}
