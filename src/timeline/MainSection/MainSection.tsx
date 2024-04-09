import Post from "./Posts/Post";
import Stories from "./Stories/Stories";
import "../MainSection/MainSection.css";

function MainSection() {
  return (
    <div className="MainSection">
      <Stories />
      <Post />
    </div>
  );
}
export default MainSection;
