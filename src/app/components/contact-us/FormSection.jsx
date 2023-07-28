import React from "react";
import FormTexts from "./FormTexts";
import Form from "./Form";
import Styles from "./Contact-us.module.css";
const FormSection = () => {
  return (
    <section className={Styles.formSectionWrapper}>
      <FormTexts />
      <div>
        <Form />
      </div>
    </section>
  );
};

export default FormSection;
