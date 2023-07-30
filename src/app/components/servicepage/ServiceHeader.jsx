import React from "react";
import Styles from "./styles/ServiceHeader.module.css";
import Image from "next/image";
import bg from "@/app/assets/w1.png";
const ServiceHeader = () => {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.h1}>IT solutions for business</h1>
      <p className={Styles.p}>
        We develop websites, online stores, mobile applications, CRM and digital
        platforms. We will select an individual solution for your needs, budget
        and time frame.
      </p>
      <button className={Styles.btn}>To get a consultation</button>
      <Image src={bg} alt="bg" className={Styles.bg} />
    </div>
  );
};

export default ServiceHeader;
