import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { LoaderProvider } from "./Context/LoaderProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoaderProvider>
  </StrictMode>
);
