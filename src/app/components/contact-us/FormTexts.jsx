"use client";
import React from "react";
import { Facebook, Telegram } from "@mui/icons-material";
import Styles from "./Contact-us.module.css";
const FormTexts = () => {
  return (
    <div className={Styles.formTextWrapper}>
      <h1 className={Styles.formText}>
        Order<span className={Styles.span}> free </span>
        consultation and calculation of the cost of your project
      </h1>
      <p className={Styles.formParagraph}>
        Fill out the form or contact our specialist in a convenient way for you.
        We will select for you a comfortable consultation time and calculate the
        cost of the project.
      </p>
      <a href="#" className={Styles.aLink}>
        <Facebook sx={{ width: 40, fontSize: 36 }} />
        XSOFT - Development
      </a>
      <a href="#" className={Styles.aLink}>
        <Telegram sx={{ width: 40, fontSize: 36 }} />
        @Xsoft-dev
      </a>
    </div>
  );
};

export default FormTexts;
