import React from "react";
import Layout from "../components/Layout/Layout";
import HeadText from "../components/about-company/HeadText";
import AboutSection from "../components/about-company/AboutSection";
import Chosen from "../components/Chosen/Chosen";
import FormSection from "../components/contact-us/FormSection";
import { getDictionary } from "../../../../getDictionary";

const About = async ({params}) => {
  const lang = await getDictionary(params?.lang)
  return (
    <Layout params={params?.lang} lang={lang}>
      <HeadText lang={lang} />
      <AboutSection lang={lang.AboutUs} />
      <Chosen lang={lang} />
      <FormSection lang={lang.formSection} />
    </Layout>
  );
};

export default About;
