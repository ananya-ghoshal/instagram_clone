import "./Post.css";
import PostImg from "./post.jpg";
import ChatIcon from "../../icons/ChatIcon";
import NotificationIcon from "../../icons/Notifications";
import SendIcon from "../../icons/SendIcon";
import SaveIcon from "../../icons/SaveIcon";
import MoreHorizonIcon from "../../icons/MoreHorizonIcon";
import ProfileImage from "../../components/ProfileImage";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <ProfileImage />
          <span>username</span>•2d
        </div>
        <MoreHorizonIcon />
      </div>
      <div className="post__img">
        <img src={PostImg} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__IconsMain">
            <div className="icons">
              <NotificationIcon />
            </div>
            <div className="icons">
              <ChatIcon />
            </div>
            <div className="icons">
              <SendIcon />
            </div>
          </div>
          <div className="post__IconSave">
            <div className="icons">
              <SaveIcon />
            </div>
          </div>
        </div>
        Liked by 209 people.
      </div>
    </div>
  );
}

export default Post;
