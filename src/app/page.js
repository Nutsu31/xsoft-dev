import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
import Layout from "./components/Layout/Layout";
import './page.css'
import Cases from "./components/Cases/Cases";


export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: 50,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ProblemSolvingSection />
        <ItServiceSection />
      </div>
      
      <Cases/>
      
    </Layout>
  );
}
