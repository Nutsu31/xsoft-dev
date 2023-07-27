import ProblemSolvingSection from "./components/probleSolvingSection/ProblemSolvingSection";
import ItServiceSection from "./components/itSolutions/ItServiceSection";
import RoundCircle from "./components/roundCircle/RoundCircle";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: 50,
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <RoundCircle />
      <h1
        style={{ color: "white", fontSize: 56, textAlign: "left", width: 1000 }}
      >
        We are focused on solving your problems
      </h1>
      <ProblemSolvingSection />
      <h1
        style={{ color: "white", fontSize: 56, textAlign: "left", width: 1000 }}
      >
        IT solutions for business
      </h1>

      <ItServiceSection />
    </div>
  );
}
