import React from "react";
import ItService from "./ItService";
import Styles from "./ItServiceSection.module.css";
const ittext1 = {
  header: "Web development",
  info: "Development of sites and web applications of any complexity",
  info2: "Consulting",
  info3: "UI/UX design",
  dev: "Turkey development",
  boxNumber: 1,
};

const ittext2 = {
  header: "Mobile development",
  info: "Android / iOS mobile application development",
  info2: "Consulting",
  info3: "UI/UX design",
  dev: "Turkey development",
  boxNumber: 2,
};

const ittext3 = {
  header: "Boxed solutions",
  info: "Development of sites and web applications of any complexity",
  info2: "Consulting",
  info3: "UI/UX design",
  dev: "Development from 2 weeks",
  boxNumber: 3,
};

const ittext4 = {
  header: "Outstaff",
  info: "We allocate developers for your tasks.",
  info2: "Adaptation",
  info3: "Working on your project",
  dev: "Flexible prices",
  boxNumber: 4,
};

const ittext5 = {
  header: "No code solution",
  info: "Technical support and service 24/7.",
  info2: "Consulting",
  info3: "UI/UX design",
  dev: "Turkey development",
  boxNumber: 5,
};

const ittext6 = {
  header: "Support",
  info: "Technical support and service 24/7.",
  info2: "Reduced product downtime",
  info3: "Assistance in restoring the functionality of the product",
  dev: "Prompt response to problems",
  boxNumber: 6,
};

const ItServiceSection = () => {
  return (
    <div className={Styles.grid}>
      <ItService text={ittext1} />
      <ItService text={ittext2} />
      <ItService text={ittext3} />
      <ItService text={ittext4} />
      <ItService text={ittext5} />
      <ItService text={ittext6} />
    </div>
  );
};

export default ItServiceSection;
