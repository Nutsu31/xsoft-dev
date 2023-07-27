import React from "react";
import Styles from "./SectionHeader.module.css";
const SectionHeader = ({ text }) => {
  return (
    <div className={Styles.txtWrapper}>
      <h1 className={Styles.headerTxt}>{text}</h1>
    </div>
  );
};

export default SectionHeader;
