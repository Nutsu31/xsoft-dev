import React from "react";
import Layout from "../components/Layout/Layout";
import ServiceSection from "../components/servicepage/ServiceSection";
import { getDictionary } from "../../../../getDictionary";

const Services = async ({params}) => {
  const lang = await getDictionary(params?.lang)

  return (
    <Layout params={params?.lang} lang={lang}>
      <ServiceSection lang={lang} />
    </Layout>
  );
};

export default Services;
