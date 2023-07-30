import React from "react";
import Styles from "./HeadText.module.css";
const HeadText = () => {
  return (
    <div className={Styles.textWrapper}>
      <h1 className={Styles.h1}>Experts in mobile and web development</h1>
      <p className={Styles.p}>
        Our mission is to anticipate customer requirements and help them grow
        their business in the online sector.
      </p>
      <p className={Styles.p}>
        We are focused on solving the client's problems and the exact result in
        numbers.
      </p>
    </div>
  );
};

export default HeadText;
