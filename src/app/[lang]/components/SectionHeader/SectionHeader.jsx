import React from "react";
import Styles from "./SectionHeader.module.css";
const SectionHeader = ({ lang }) => {
  return (
    <div className={Styles.txtWrapper}>
        <h1 className={Styles.headerTxt}>{lang}</h1>
    </div>
  );
};

export default SectionHeader;
