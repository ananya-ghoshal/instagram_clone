import "./Stories.css";
import Storyimage from "../../../../src/components/photo.jpg";

function StoryEntry() {
  return (
    <span>
      <img src={Storyimage} alt="" />
      <p>username</p>
    </span>
  );
}

export default StoryEntry;
