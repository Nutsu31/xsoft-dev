import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
export default function Home() {
  return (
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
  );
}
