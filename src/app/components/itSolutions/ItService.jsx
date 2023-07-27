import React from "react";
import Styles from "./ItService.module.css";
const ItService = ({ text }) => {
  return (
    <div className={Styles.box}>
      <h2 className={Styles.header}>{text.header}</h2>
      <p className={Styles.info}>{text.info}</p>
      <p className={Styles.info}>{text.info2}</p>
      <p className={Styles.info}>{text.info3}</p>
      <p className={Styles.info}>{text.dev}</p>
    </div>
  );
};

export default ItService;
