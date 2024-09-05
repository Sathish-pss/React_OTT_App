// Import MUI components
import { Backdrop } from "@mui/material";
// Import MUI Icons
// Import External Libraries
import RotateLoader from "react-spinners/RotateLoader";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * 
 * @returns Functional Component returns the loader
 */
const LoaderSpinner = () => {
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1000,
        }}
        open={true}
      >
        <RotateLoader
          color="red"
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={20}
        />
      </Backdrop>
    </div>
  );
  // You can replace this with your loading component
};

export default LoaderSpinner;
