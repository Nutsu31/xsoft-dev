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


export default async function Home({params}) {

  const lang = await getDictionary(params?.lang);
  return (
    <Layout lang={lang} params={params?.lang}>
      <div className="body">
        <WallpaperSection lang={lang} />
        <RoundCircle />
        <div>
          <SectionHeader lang={lang.SelectionHandlerone.Text} />
          <ProblemSolvingSection lang={lang.problemSolving} />
        </div>
        <div>
          <SectionHeader lang={lang.SelectionHandlertwo.Text} />
          <ItServiceSection lang={lang} />
        </div>
      </div>
      <Cases lang={lang.Cases} />
      <Chosen lang={lang} />
      <FormSection lang={lang.formSection}/>
    </Layout>
  );
}
