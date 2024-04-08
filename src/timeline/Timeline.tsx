import "./Timeline.css";
import Post from "./posts/Post";
import Stories from "./status/Stories";

function Timeline() {
  return (
    <div className="timeline">
      <Stories />
      <Post />
    </div>
  );
}

export default Timeline;
