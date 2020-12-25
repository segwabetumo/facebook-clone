import React from "react";
import "../css/MessageSender.css";

// imp comps
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  function postPost(e) {
    // prevents the btn from refreshing the app
    e.preventDefault();
  }

  return (
    <div className="msgSender">
      <div className="msgSender__top">
        <Avatar />
        <form action="#">
          <input placeholder="What's in your Mind?" className="msgInput" />
          <input placeholder="Image URL ( Optional... )" className="imgInput" />
          <button type="submit" onClick={postPost} className="postBtn">
            Post
          </button>
        </form>
      </div>

      <div className="msgSender__bottom">
        <div className="msgSender__bottom--op">
          <VideoCamIcon style={{ color: "#D22340" }} />
          <h3>Live Video</h3>

          <div className="msgSender__bottom--op">
            <PhotoLibraryIcon style={{ color: "#41B35D" }} />
            <h3>Photo/Video </h3>

            <div className="msgSender__bottom--op">
              <InsertEmotionIcon style={{ color: "#EAB026" }} />
              <h3>Feeling/Activity</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
