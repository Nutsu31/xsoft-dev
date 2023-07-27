import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
import Layout from "./components/Layout/Layout";
import './page.css'

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: 50,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProblemSolvingSection />
        <ItServiceSection />
      </div>
    </Layout>
  );
}
