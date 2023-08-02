import React from "react";
import Styles from "./styles/ServiceSection.module.css";
import ServiceHeader from "./ServiceHeader";
import ItServiceSection from "../itSolutions/ItServiceSection";
import ServiceOperations from "./ServiceOperations";
import Cases from "../Cases/Cases";
import FormSection from "../contact-us/FormSection";
import TechnologiesSection from "../Technologies/TechnologiesSection";


const ServiceSection = ({lang}) => {
  return (
    <div className={Styles.sectionWrapper}>
      <ServiceHeader lang={lang.ServicePage.ServiceHeader} />
      <ItServiceSection lang={lang} />
      <h1 className={Styles.h1}>{lang.OperationPrinciple.title}</h1>
      <ServiceOperations lang={lang.OperationPrinciple} />
      <h1 className={Styles.h1}>{lang.Technologystack}</h1>
      <TechnologiesSection />
      
      <Cases lang={lang.Cases}/>
      <FormSection lang={lang.formSection} />
    </div>
  );
};

export default ServiceSection;
