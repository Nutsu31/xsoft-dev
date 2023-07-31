import React from "react";
import Layout from "../components/Layout/Layout";
import ServiceSection from "../components/servicepage/ServiceSection";
import { getDictionary } from "../../../../getDictionary";

const Services = async ({params}) => {


  return (
    <Layout>
      <ServiceSection />
    </Layout>
  );
};

export default Services;
