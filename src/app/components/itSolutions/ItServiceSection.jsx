"use client";
import React, { useEffect } from "react";
import ItService from "./ItService";
import Styles from "./ItServiceSection.module.css";

const textArr = [
  {
    text: {
      header: "Web development",
      info: "Development of sites and web applications of any complexity",
      info2: "Consulting",
      info3: "UI/UX design",
      dev: "Turkey development",
      boxNumber: 1,
    },
  },
  {
    text: {
      header: "Mobile development",
      info: "Android / iOS mobile application development",
      info2: "Consulting",
      info3: "UI/UX design",
      dev: "Turkey development",
      boxNumber: 2,
    },
  },
  {
    text: {
      header: "Boxed solutions",
      info: "Development of sites and web applications of any complexity",
      info2: "Consulting",
      info3: "UI/UX design",
      dev: "Development from 2 weeks",
      boxNumber: 3,
    },
  },
  {
    text: {
      header: "Outstaff",
      info: "We allocate developers for your tasks.",
      info2: "Adaptation",
      info3: "Working on your project",
      dev: "Flexible prices",
      boxNumber: 4,
    },
  },
  {
    text: {
      header: "No code solution",
      info: "Technical support and service 24/7.",
      info2: "Consulting",
      info3: "UI/UX design",
      dev: "Turkey development",
      boxNumber: 5,
    },
  },
  {
    text: {
      header: "Support",
      info: "Technical support and service 24/7.",
      info2: "Reduced product downtime",
      info3: "Assistance in restoring the functionality of the product",
      dev: "Prompt response to problems",
      boxNumber: 6,
    },
  },
];

const ItServiceSection = () => {
  return (
    <div className={Styles.grid}>
      {textArr.map((item) => {
        return (
          <ItService key={Math.random() * Math.random()} text={item.text} />
        );
      })}
    </div>
  );
};

export default ItServiceSection;
