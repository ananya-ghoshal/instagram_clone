import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <Sidenav />
      <Timeline />
    </div>
  );
}

export default Homepage;
