import "./Sidenav.css";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import ExploreIcon from "../icons/ExploreIcon";
import ChatIcon from "../icons/ChatIcon";
import CreateIcon from "../icons/CreateIcon";
import MenuIcon from "../icons/MenuIcon";
import NotificationIcon from "../icons/Notifications";
import ReelIcon from "../icons/ReelIcon";
import ProfileImage from "../components/ProfileImage";

function Sidenav() {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src="/images/instagram_logo.png" alt="" />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <ReelIcon />
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="sidenav__button">
          <NotificationIcon />
          <span>Notifications</span>
        </button>

        <button className="sidenav__button">
          <CreateIcon />
          <span>Create</span>
        </button>

        <button className="sidenav__button">
          <ProfileImage />
          <span>Profile</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
