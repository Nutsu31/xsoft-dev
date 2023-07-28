import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
import Layout from "./components/Layout/Layout";
import "./page.css";
import Cases from "./components/Cases/Cases";
import RoundCircle from "./components/roundCircle/RoundCircle";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import WallpaperSection from "./components/wallpaper/WallpaperSection";

const header1 = "We are focused on solving your problems";
const header2 = "IT solutions for business";

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: 100,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "1060px",
          maxWidth: "90%",
          margin: "15rem auto"
        }}
      >
        <WallpaperSection />
        <RoundCircle  />
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
    </Layout>
  );
}
