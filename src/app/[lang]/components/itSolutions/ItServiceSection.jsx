

import ItService from "./ItService";
import Styles from "./ItServiceSection.module.css";
import Laptop from "@/app/[lang]/assets/svg/laptop.svg";
import LaptopBlue from "@/app/[lang]/assets/svg/laptopBlue.svg";

import Mobile from "@/app/[lang]/assets/svg/mobile.svg";
import MobileBlue from "@/app/[lang]/assets/svg/mobileBlue.svg";

import Support from "@/app/[lang]/assets/svg/support.svg";
import SupportBlue from "@/app/[lang]/assets/svg/supportBlue.svg";

import Box from "@/app/[lang]/assets/svg/box.svg";
import BoxBlue from "@/app/[lang]/assets/svg/boxBlue.svg";

import NoCode from "@/app/[lang]/assets/svg/nocodesolution.svg";
import NoCodeBlue from "@/app/[lang]/assets/svg/nocodesolutionBlue.svg";

import OutStaff from "@/app/[lang]/assets/svg/outstaff.svg";
import OutStaffBlue from "@/app/[lang]/assets/svg/outstaffBlue.svg";

import Figma from "@/app/[lang]/assets/svg/figma.svg";
import FigmaBlue from "@/app/[lang]/assets/svg/figmaBlue.svg";
import { v4 as uuid } from "uuid";

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

const ItServiceSection = ({lang}) => {

  return (
    <div className={Styles.grid}>
      {lang.ItSolutions.map((item) => {
        return <ItService key={uuid()} text={item.text} />;
      })}
    </div>
  );
};

export default ItServiceSection;
