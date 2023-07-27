import React from "react";
import Styles from "./Services.module.css";
import { divPosition } from "@/app/utils/utils";
const ServiceBox = ({ text }) => {
  return (
    <div
      className={Styles.box}
      style={{ gridArea: divPosition(text.boxNumber) }}
    >
      <h2 className={Styles.header}>{text.header}</h2>
      <p className={Styles.info}>{text.info}</p>
      <p className={Styles.more}>More {`>`}</p>
    </div>
  );
};

export default ServiceBox;
