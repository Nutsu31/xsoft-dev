import React from "react";
import { v4 as uuid } from "uuid";
import AboutItem from "./AboutItem";
import Styles from "./AboutItem.module.css";
const info = [
  { number: "3 years", text: "On the market" },
  { number: "60+", text: "Implemented project" },
  { number: "10", text: "Specialists" },
  { number: "2", text: "Areas of cooperation" },
];
const AboutSection = () => {
  return (
    <div className={Styles.aboutSection}>
      {info.map((item) => (
        <AboutItem key={uuid()} number={item.number} text={item.text} />
      ))}
    </div>
  );
};

export default AboutSection;
