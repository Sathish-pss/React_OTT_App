import React from "react";
// Importing the Material UI Component here
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

/**
 * @returns Reusable custom text field with props
 */
const CustomTextField = ({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  label,
  error = false,
  helperText = "",
  inputIcon = null,
  endIcon = null,
  fullWidth = false,
  ...otherProps
}) => {
  return (
    <TextField
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      label={label}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          startAdornment: inputIcon ? (
            <InputAdornment position="start">{inputIcon}</InputAdornment>
          ) : null,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : null,
        },
      }}
      {...otherProps} // Passes any additional props to the TextField
    />
  );
};

export default CustomTextField;
