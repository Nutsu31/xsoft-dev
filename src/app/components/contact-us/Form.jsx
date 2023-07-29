"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import Styles from "./Contact-us.module.css";
import IntrestedOn from "./imIntrested/IntrestedOn";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
const Form = () => {
  const [checked, setChecked] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const interestedIn = checked.join(",");
  const [emailing, setEmailing] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const memo = useMemo(() => {
    return {
      name: emailing.name,
      email: emailing.email,
      number: emailing.number,
      message:
        emailing.message +
        " " +
        "(& User interested in " +
        interestedIn +
        " ) ",
    };
  }, [checked]);
  const handleCheck = (e) => {
    const value = e.target.value;
    const reg = /^[0-9]+$/;
    if (reg.test(value)) {
      setEmailing({ ...emailing, number: value });
    } else {
      return setError("Invalid number");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_ewooohc", "template_8tet1q6", memo, "ohIkuAroMbBldjcPE")
      .then((res) => {
        setLoading(false);
        alert("Send Successful");
      })
      .catch((error) => {
        setLoading(false);
        alert("Send Failed");
      });
  };
  return (
    <form className={Styles.form} onSubmit={(e) => handleSubmit(e)}>
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
          value={emailing.name}
          onChange={(e) => setEmailing({ ...emailing, name: e.target.value })}
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
          value={emailing.number}
          onChange={(e) => handleCheck(e)}
          fullWidth
          sx={{
            background: "#4a4a4a",
            color: "white",
            borderRadius: "10px",
          }}
        />
      </Box>
      <TextField
        type="email"
        required
        value={emailing.email}
        fullWidth
        sx={{
          background: "#4a4a4a",
          color: "white",
          borderRadius: "10px",
        }}
        onChange={(e) => setEmailing({ ...emailing, email: e.target.value })}
        placeholder="Email Address"
      />
      <textarea
        className={Styles.textArea}
        rows={6}
        placeholder="About your project"
        onChange={(e) => setEmailing({ ...emailing, message: e.target.value })}
        value={emailing.message}
      />
      <IntrestedOn setChecked={setChecked} checked={checked} />
      <Button variant="contained" type="submit" fullWidth sx={{ height: 60 }}>
        {loading ? (
          <Oval
            height="36"
            width="36"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          "Send"
        )}
      </Button>
    </form>
  );
};

export default Form;
