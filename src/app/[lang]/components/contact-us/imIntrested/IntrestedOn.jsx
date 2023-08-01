"use client";
import React, { useState } from "react";
import Buttons from "./Buttons";
import Styles from "./IntrestedOn.module.css";
import { v4 as uuid } from "uuid";
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

const IntrestedOn = ({ checked, setChecked,lang }) => {
  const handleFilter = (item, isChecked) => {
    if (isChecked) {
      setChecked((prev) => [...prev, item]);
    } else {
      setChecked((prev) => prev.filter((value) => value !== item));
    }
  };

  return (
    <div>
      <h1 className={Styles.headerText}>{lang.Interested}</h1>
      <div className={Styles.buttonWrapper}>
        {interested.map((item) => (
          <Buttons
            item={item}
            key={uuid()}
            isChecked={checked.includes(item)}
            onChange={(isChecked) => handleFilter(item, isChecked)}
          />
        ))}
      </div>
    </div>
  );
};

export default IntrestedOn;
