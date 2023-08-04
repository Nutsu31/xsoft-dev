"use client";
import React from "react";
import Styles from "./styles/ServiceHeader.module.css";
import Image from "next/image";
import bg from "@/app/[lang]/assets/w1.png";
import { Link as LinkScroll } from "react-scroll";
const ServiceHeader = ({ lang }) => {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.h1}>{lang.title}</h1>
      <p className={Styles.p}>{lang.text}</p>
      <LinkScroll
        activeClass="active"
        to="contactUs"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        {" "}
        <button className={Styles.btn}>{lang.consultation}</button>
      </LinkScroll>
      <Image src={bg} alt="bg" className={Styles.bg} />
    </div>
  );
};

export default ServiceHeader;
