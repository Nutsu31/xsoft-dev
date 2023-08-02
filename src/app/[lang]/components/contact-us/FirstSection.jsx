import React from "react";
import Styles from "./Contact-us.module.css";

import bg from "@/app/[lang]/assets/w4.png";
import Image from "next/image";
const FirstSection = ({lang}) => {
  return (
    <div className={Styles.sectionWrapper}>
      <Image
        src={bg}
        alt="xsoft web development mobile apps"
        className={Styles.bg}
      />
      <h1 className={Styles.headerText}>{lang.Title}</h1>
      <div className={Styles.paragraphWrapper}>
        <div>
          <p className={Styles.paragraphHeader}>{lang.call}</p>
          <p className={Styles.paragraph}>+995 599 12-34-56</p>
        </div>
        <div>
          <p className={Styles.paragraphHeader}>{lang.mail}</p>
          <p className={Styles.paragraph}>Welcome@xsoft.com</p>
        </div>
      </div>


    </div>
  );
};

export default FirstSection;
