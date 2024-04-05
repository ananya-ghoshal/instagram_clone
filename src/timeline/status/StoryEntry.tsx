import "./Stories.css";
import Storyimage from "../../components/photo.jpg";

function StoryEntry() {
  return (
    <span>
      <img src={Storyimage} alt="" />
      <p>username</p>
    </span>
  );
}

export default StoryEntry;
