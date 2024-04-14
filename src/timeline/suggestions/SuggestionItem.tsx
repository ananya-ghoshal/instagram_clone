import ProfileImage from "../../components/ProfileImage";
import "./Suggestions.css";

function SuggestionItem(props: any) {
  return (
    <div className="suggestionItem">
      <div className="profile_img">
        <ProfileImage />
      </div>

      <div className="details">
        <span>{props.name}</span>
        <span>{props.details}</span>
      </div>
      <a href="#" className="follow">
        {props.button}
      </a>
    </div>
  );
}
export default SuggestionItem;
