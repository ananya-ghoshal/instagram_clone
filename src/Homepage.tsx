import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import Suggestions from "./timeline/suggestions/Suggestions";

function Homepage() {
  return (
    <div className="homepage">
      <Sidenav />
      <Timeline />
      <Suggestions />
    </div>
  );
}

export default Homepage;
