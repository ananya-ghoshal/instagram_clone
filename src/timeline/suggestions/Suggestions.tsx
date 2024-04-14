import "./Suggestions.css";
import SuggestionItem from "./SuggestionItem";

function Suggestions() {
  return (
    <div className="suggestions">
      <SuggestionItem
        name="username"
        details="Ananya Ghoshal"
        button="Switch"
      />
      <span>Suggested for you</span>
      <div className="suggestion__items">
        <div className="suggestion__item">
          <SuggestionItem name="username" details="Name" button="Follow" />
        </div>

        <div className="suggestion__item">
          <SuggestionItem name="username" details="Name" button="Follow" />
        </div>

        <div className="suggestion__item">
          <SuggestionItem name="username" details="Name" button="Follow" />
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
