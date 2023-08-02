import React from "react";
import FirstSection from "../components/contact-us/FirstSection";
import Layout from "../components/Layout/Layout";
import FormSection from "../components/contact-us/FormSection";
import { getDictionary } from "../../../../getDictionary";

const Contact = async ({params}) => {
  const lang = await getDictionary(params?.lang)

  return (
    <Layout lang={lang} params={params?.lang}>
      <FirstSection lang={lang.contactUs} /> 
      <FormSection lang={lang.formSection} />
    </Layout>
  );
};

export default Contact;
