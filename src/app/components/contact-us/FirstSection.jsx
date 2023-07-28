import React from "react";
import Styles from "./Contact-us.module.css";
import Circle from "./Circle";
const FirstSection = () => {
  return (
    <div className={Styles.sectionWrapper}>
      <h1 className={Styles.headerText}>We are always open to the offer</h1>
      <div className={Styles.paragraphWrapper}>
        <div>
          <p className={Styles.paragraphHeader}>Call us:</p>
          <p className={Styles.paragraph}>+995 599 12-34-56</p>
        </div>
        <div>
          <p className={Styles.paragraphHeader}>Email us:</p>
          <p className={Styles.paragraph}>Welcome@xsoft.com</p>
        </div>
      </div>
      <Circle />
    </div>
  );
};

export default FirstSection;
