import React from "react";
import Layout from "../components/Layout/Layout";
import HeadText from "../components/about-company/HeadText";
import AboutSection from "../components/about-company/AboutSection";
import Chosen from "../components/Chosen/Chosen";

const About = () => {
  return (
    <Layout>
      <HeadText />
      <AboutSection />
      <Chosen />
    </Layout>
  );
};

export default About;
