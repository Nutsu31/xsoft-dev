"use client";
import React from "react";
import { Facebook, Telegram } from "@mui/icons-material";
import Styles from "./Contact-us.module.css";
const FormTexts = ({lang}) => {
  return (
    <div className={Styles.formTextWrapper}>
      <h1 className={Styles.formText}>
        {lang.formTextTitle.order}<span className={Styles.span}> {lang.formTextTitle.free} </span>
        {lang.formTextTitle.consultation}
      </h1>
      <p className={Styles.formParagraph}>
       {lang.fromTextPtext}
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
