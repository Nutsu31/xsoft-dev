"use client"
import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
import Layout from "./components/Layout/Layout";
import "./page.css";
import Cases from "./components/Cases/Cases";
import RoundCircle from "./components/roundCircle/RoundCircle";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import WallpaperSection from "./components/wallpaper/WallpaperSection";
import FormSection from "./components/contact-us/FormSection";
import Chosen from "./components/Chosen/Chosen";
import { getDictionary } from "../../../getDictionary";


const header1 = "We are focused on solving your problems";
const header2 = "IT solutions for business";

export default async function Home({params}) {

  const lang = await getDictionary(params?.lang)

  console.log("params",params)

  return (
    <Layout lang={lang} params={params?.lang}>
      <div className="body">
        <WallpaperSection />
        <RoundCircle />
        <div>
          <SectionHeader text={header1} />
          <ProblemSolvingSection />
        </div>
        <div>
          <SectionHeader text={header2} />
          <ItServiceSection />
        </div>
      </div>
      <Cases />
      <Chosen />
      <FormSection />
    </Layout>
  );
}
