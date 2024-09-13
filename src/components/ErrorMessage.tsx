import React from "react";
import { Alert, Box } from "@mui/material";

interface ErrorMessageProps {
  message: string; // The error message to be displayed
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box marginTop={3}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default ErrorMessage;
