import React from "react";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Styles from "./styles/EachTechnologies.module.css";
const EachTechnologies = ({ items }) => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.text}>{items.category}</h1>
      <div className={Styles.imgParent}>
        {items.tech.map((tech) => (
          <div key={uuid()} className={Styles.imgWrapper}>
            <Image src={tech.image} alt={tech.name} className={Styles.img} />
            <h2 className={Styles.text}>{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachTechnologies;
