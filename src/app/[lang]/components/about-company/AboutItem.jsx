import React from "react";
import Styles from "./AboutItem.module.css";

const AboutItem = ({ number, text }) => {
  return (
    <div className={Styles.aboutWrapper}>
      <h2 className={Styles.number}>{number}</h2>
      <p className={Styles.text}>{text}</p>
    </div>
  );
};

export default AboutItem;
