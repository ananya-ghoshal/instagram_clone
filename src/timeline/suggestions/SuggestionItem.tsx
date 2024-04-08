import ProfileImage from "../../components/ProfileImage";
import "./Suggestions.css";

function SuggestionItem() {
  return (
    <div className="suggestionItem">
      <div className="profile_img">
        <ProfileImage />
      </div>

      <div className="details">
        <span>username</span>
        <span>Suggested for you</span>
      </div>
      <a href="#" className="follow">
        Follow
      </a>
    </div>
  );
}
export default SuggestionItem;
