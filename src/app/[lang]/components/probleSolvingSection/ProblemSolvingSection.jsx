import React from "react";
import ServiceBox from "./ServiceBox";
import Styles from "./ProblemSolvingSection.module.css";
import { v4 as uuid } from "uuid";

// const textArr = [
//   {
//     text: {
//       header: "Business process optimization",
//       info: "Increase productivity and business efficiency",
//       boxNumber: 1,
//     },
//   },
//   {
//     text: {
//       header: "Increasing sales",
//       info: "A convenient shopping environment is the key to high sales.",
//       boxNumber: 2,
//     },
//   },
//   {
//     text: {
//       header: "Detachment from competitors",
//       info: "Be the first in the industry! Stand out from competitors with the help of IT-technologies.",
//       boxNumber: 3,
//     },
//   },
//   {
//     text: {
//       header: "Start up",
//       info: "The solution for a quick start of your new product.",
//       boxNumber: 4,
//     },
//   },
//   {
//     text: {
//       header: "Loyalty increase",
//       info: "Increasing the company's turnover through long-term customer relationships.",
//       boxNumber: 5,
//     },
//   },
//   {
//     text: {
//       header: "Reputation",
//       info: "Boost your reputation and brand awareness.",
//       boxNumber: 6,
//     },
//   },
// ];

const ProblemSolvingSection = ({lang}) => {
  return (
    <div className={Styles.grid}>
      {lang.map((item) => {
        return <ServiceBox key={uuid()} text={item.text} />;
      })}
    </div>
  );
};

export default ProblemSolvingSection;
