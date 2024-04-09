import MainSection from "./MainSection/MainSection";
import Suggestions from "./Suggestions/Suggestions";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <MainSection />
      <Suggestions />
    </div>
  );
}

export default Timeline;
