import React from "react";
import FormTexts from "./FormTexts";
import Form from "./Form";
import Styles from "./Contact-us.module.css";
const FormSection = ({lang}) => {
  return (
    <section className={Styles.formSectionWrapper} id="contactUs">
      <FormTexts lang={lang.formTexts}/>
      <Form lang={lang.form} />
    </section>
  );
};

export default FormSection;
