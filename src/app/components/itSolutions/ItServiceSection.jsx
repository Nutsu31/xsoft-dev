"use client";
import React, { useEffect } from "react";
import ItService from "./ItService";
import Styles from "./ItServiceSection.module.css";
import Laptop from "@/app/assets/svg/laptop.svg";
import LaptopBlue from "@/app/assets/svg/laptopBlue.svg";

import Mobile from "@/app/assets/svg/mobile.svg";
import MobileBlue from "@/app/assets/svg/mobileBlue.svg";

import Support from "@/app/assets/svg/support.svg";
import SupportBlue from "@/app/assets/svg/supportBlue.svg";

import Box from "@/app/assets/svg/box.svg";
import BoxBlue from "@/app/assets/svg/boxBlue.svg";

import NoCode from "@/app/assets/svg/nocodesolution.svg";
import NoCodeBlue from "@/app/assets/svg/nocodesolutionBlue.svg";

import OutStaff from "@/app/assets/svg/outstaff.svg";
import OutStaffBlue from "@/app/assets/svg/outstaffBlue.svg";

import Figma from "@/app/assets/svg/figma.svg";
import FigmaBlue from "@/app/assets/svg/figmaBlue.svg";

const textArr = [
  {
    text: {
      header: "Web development",
      info: "Development of sites and web applications of any complexity",
      info2: "Consulting",
      info3: "UI/UX design",
      dev: "Turkey development",
      boxNumber: 1,
      img: Laptop,
      hover: LaptopBlue,
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
      img: Mobile,
      hover: MobileBlue,
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
      img: Box,
      hover: BoxBlue,
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
      img: OutStaff,
      hover: OutStaffBlue,
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
      img: NoCode,
      hover: NoCodeBlue,
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
      img: Support,
      hover: SupportBlue,
    },
  },
  {
    text: {
      header: "Design",
      info: "Technical support and service 24/7.",
      info2: "Reduced product downtime",
      info3: "Assistance in restoring the functionality of the product",
      dev: "Prompt response to problems",
      boxNumber: 7,
      img: Figma,
      hover: FigmaBlue,
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
