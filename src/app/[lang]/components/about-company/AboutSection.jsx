import React from "react";
import { v4 as uuid } from "uuid";
import AboutItem from "./AboutItem";
import Styles from "./AboutItem.module.css";

const AboutSection = ({lang}) => {
  return (
    <div className={Styles.aboutSection}>
      {lang.infoUs.map((item) => (
        <AboutItem key={uuid()} number={item.number} text={item.text} />
      ))}
    </div>
  );
};

export default AboutSection;
