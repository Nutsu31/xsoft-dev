import React from "react";
import Image from "next/image";
import Styles from "./EachOperation.module.css";
import { Message, Style } from "@mui/icons-material";
const EachOperation = ({ headerTxt, bodyTxt, Icon }) => {
  
  return (
    <div className={Styles.divWrapper}>
      <div className={Styles.imgLineWrapper}>
       <Icon className={Styles.icon} />
        <div className={Styles.line}></div>
      </div>
      <h2 className={Styles.h2}>{headerTxt}</h2>
      <p className={Styles.p}>{bodyTxt}</p>
    </div>
  );
};

export default EachOperation;
