import React from "react";
import Styles from "./styles/ServiceHeader.module.css";
import Image from "next/image";
import bg from "@/app/[lang]/assets/w1.png";
const ServiceHeader = ({lang}) => {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.h1}>{lang.title}</h1>
      <p className={Styles.p}>
        {lang.text}
      </p>
      <button className={Styles.btn}>{lang.consultation}</button>
      <Image src={bg} alt="bg" className={Styles.bg} />
    </div>
  );
};

export default ServiceHeader;
