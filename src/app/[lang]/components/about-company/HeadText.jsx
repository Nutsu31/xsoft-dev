import React from "react";
import Styles from "./HeadText.module.css";
import Bg from "@/app/[lang]/assets/w3.png";
import Image from "next/image";
import Circle from "../contact-us/Circle";
const HeadText = ({lang}) => {
  return (
    <div className={Styles.textWrapper}>
      {/* <Circle /> */}
      <Image src={Bg} alt="wallpaper" className={Styles.bgImage} />
      <h1 className={Styles.h1}>{lang.AboutUs.Title}</h1>
      <p className={Styles.p}>
       {lang.AboutUs.firstText}
      </p>
      <p className={Styles.p}>
       {lang.AboutUs.secondText}
      </p>
    </div>
  );
};

export default HeadText;
