"use client";
import { Box, Button } from "@mui/material";
import React, { useState, useMemo } from "react";
import Styles from "./Contact-us.module.css";
import IntrestedOn from "./imIntrested/IntrestedOn";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
const Form = ({lang}) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <input
          type="text"
          placeholder="Name*"
          value={emailing.name}
          onChange={(e) => setEmailing({ ...emailing, name: e.target.value })}
          className={Styles.input}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={emailing.number}
          onChange={(e) => handleCheck(e)}
          className={Styles.input}
        />
      </Box>
      <input
        type="email"
        required
        value={emailing.email}
        onChange={(e) => setEmailing({ ...emailing, email: e.target.value })}
        placeholder="Email Address"
        className={Styles.input}
      />
      <textarea
        className={Styles.textArea}
        rows={6}
        placeholder="About your project"
        onChange={(e) => setEmailing({ ...emailing, message: e.target.value })}
        value={emailing.message}
      />
      <IntrestedOn setChecked={setChecked} checked={checked} lang={lang} />
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
          lang.sendBtn
        )}
      </Button>
    </form>
  );
};

export default Form;
