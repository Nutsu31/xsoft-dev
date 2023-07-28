"use client";
import React, { useState } from "react";
import Styles from "./Button.module.css";

const Buttons = ({ item, isChecked, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <label
        htmlFor={item}
        className={Styles.button}
        style={{ background: isChecked ? "blue" : "" }}
      >
        {item}
      </label>
      <input
        type="checkbox"
        id={item}
        value={item}
        style={{ display: "none" }}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </>
  );
};

export default Buttons;
