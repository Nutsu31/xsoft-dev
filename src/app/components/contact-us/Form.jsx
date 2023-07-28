"use client";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Styles from "./Contact-us.module.css";
import IntrestedOn from "./imIntrested/IntrestedOn";

const Form = () => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
        width: 100%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px;
        color: white !important;
        background: #4a4a4a !important;
      
        &:focus {
          border-color: ${blue[400]};
   
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );
  return (
    <form className={Styles.form}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          gap: { xs: 2 },
        }}
      >
        <TextField
          type="text"
          placeholder="Name*"
          sx={{
            background: "#4a4a4a",
            color: "white",
            borderRadius: "10px",
          }}
          fullWidth
        />
        <TextField
          type="text"
          placeholder="Phone Number"
          fullWidth
          sx={{
            background: "#4a4a4a",
            color: "white",
            borderRadius: "10px",
          }}
        />
      </Box>
      <TextField
        type="text"
        fullWidth
        sx={{
          background: "#4a4a4a",
          color: "white",
          borderRadius: "10px",
        }}
        placeholder="Email Address"
      />

      <StyledTextarea
        className={Styles.textArea}
        aria-label="minimum height"
        minRows={6}
        placeholder="About your project"
      />
      <IntrestedOn />
      <Button variant="contained" fullWidth sx={{ height: 60 }}>

        Send
      </Button>
    </form>
  );
};

export default Form;
