"use client";
import React, { useState } from "react";
import Buttons from "./Buttons";
import Styles from "./IntrestedOn.module.css";
const interested = [
  "CRM",
  "Mobile App",
  "Web App",
  "Online Store",
  "Redesign",
  "UI/UX design",
  "MVP",
  "Team Expansions",
  "Other",
];

const IntrestedOn = () => {
  const [checkbox, setChecked] = useState([]);
  console.log(
    "🚀 ~ file: IntrestedOn.jsx:19 ~ IntrestedOn ~ checkbox:",
    checkbox
  );

  const handleFilter = (item, isChecked) => {
    if (isChecked) {
      setChecked((prev) => [...prev, item]);
    } else {
      setChecked((prev) => prev.filter((value) => value !== item));
    }
  };

  return (
    <div>
      <h1 className={Styles.headerText}>I'm interested in:</h1>
      <div className={Styles.buttonWrapper}>
        {interested.map((item) => (
          <Buttons
            item={item}
            key={item}
            isChecked={checkbox.includes(item)}
            onChange={(isChecked) => handleFilter(item, isChecked)}
          />
        ))}
      </div>
    </div>
  );
};

export default IntrestedOn;
