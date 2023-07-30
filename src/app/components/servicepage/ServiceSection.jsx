import React from "react";
import Styles from "./styles/ServiceSection.module.css";
import ServiceHeader from "./ServiceHeader";
import ItServiceSection from "../itSolutions/ItServiceSection";
import ServiceOperations from "./ServiceOperations";
import Cases from "../Cases/Cases";
import FormSection from "../contact-us/FormSection";
import TechnologiesSection from "../Technologies/TechnologiesSection";

const ServiceSection = () => {
  return (
    <div className={Styles.sectionWrapper}>
      <ServiceHeader />
      <ItServiceSection />
      <h1 className={Styles.h1}>Principle of operation</h1>
      <ServiceOperations />
      <h1 className={Styles.h1}>Technology stack</h1>
      <TechnologiesSection />
      <h1 className={Styles.h1}>Cases</h1>
      <Cases />
      <FormSection />
    </div>
  );
};

export default ServiceSection;
