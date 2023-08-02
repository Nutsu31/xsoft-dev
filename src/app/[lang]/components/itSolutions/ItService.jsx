"use client";
import React, { useState } from "react";
import Styles from "./ItService.module.css";
import Image from "next/image";
import Box from "@/app/[lang]/assets/svg/box.svg";

const ItService = ({ text }) => {
  const [hover, setHover] = useState(false);
  const img = hover ? text.hover : text.img;
  console.log(text)
  return (
    <div
      className={Styles.box}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className={Styles.header}>{text.header}</h2>
      <p className={Styles.info}>{text.info}</p>
      <p className={Styles.info}>{text.info2}</p>
      <p className={Styles.info}>{text.info3}</p>
      <p className={Styles.info}>{text.dev}</p>
      <Image src={img} width={200} height={300} alt="laptop" className={Styles.photo} />
    </div>
  );
};

export default ItService;
