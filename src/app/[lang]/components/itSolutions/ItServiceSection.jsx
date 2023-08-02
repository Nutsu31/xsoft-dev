

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

const imgArr = [
  {
   
      img: Laptop,
      hover: LaptopBlue,
   
  },
  {
    
      
      img: Mobile,
      hover: MobileBlue,
    
  },
  {
   
   
      img: Box,
      hover: BoxBlue,
   
  },
  {
    
      img: OutStaff,
      hover: OutStaffBlue,
   
  },
  {
  
      img: NoCode,
      hover: NoCodeBlue,
    
  },
  {
      img: Support,
      hover: SupportBlue,
 
  },
  {
   
      img: Figma,
      hover: FigmaBlue,
   
  },
];

const ItServiceSection = ({lang}) => {

  return (
    <div className={Styles.grid}>
      {lang.ItSolutions.map((item,index) => {
        return <ItService key={uuid()} text={item.text} imgArr={imgArr[index]} />;
      })}
    </div>
  );
};

export default ItServiceSection;
