import React from "react";
import ServiceBox from "./ServiceBox";
import Styles from "./ProblemSolvingSection.module.css";
const text1 = {
  header: "Business process optimization",
  info: "Increase productivity and business efficiency",
  boxNumber: 1,
};
const text2 = {
  header: "Increasing sales",
  info: "A convenient shopping environment is the key to high sales.",
  boxNumber: 2,
};
const text3 = {
  header: "Detachment from competitors",
  info: "Be the first in the industry! Stand out from competitors with the help of IT-technologies.",
  boxNumber: 3,
};
const text4 = {
  header: "Start up",
  info: "The solution for a quick start of your new product.",
  boxNumber: 4,
};
const text5 = {
  header: "Loyalty increase",
  info: "Increasing the company's turnover through long-term customer relationships.",
  boxNumber: 5,
};
const text6 = {
  header: "Reputation",
  info: "Boost your reputation and brand awareness.",
  boxNumber: 6,
};

const ProblemSolvingSection = () => {
  return (
    <div className={Styles.grid}>
      <ServiceBox text={text1} />
      <ServiceBox text={text2} />
      <ServiceBox text={text3} />
      <ServiceBox text={text4} />
      <ServiceBox text={text5} />
      <ServiceBox text={text6} />
    </div>
  );
};

export default ProblemSolvingSection;
