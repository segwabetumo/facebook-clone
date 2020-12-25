import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/Content.css";

import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { useStateValue } from "./StateProvider";

function Content({ profilePic, image, username, timestamp, message }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="content">
      <div className="content__top">
        <Avatar src={profilePic} className="content__avatar" />
        <div className="content__topInfo">
          <h3>{username}</h3>
          {/** time date */}
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="content__bottom">
        <p>{message}</p>
      </div>
      <div className="content__image">
        <img src={image} alt="" />
      </div>
      <div className="content__react">
        <div className="react__opt">
          <ThumbUpOutlinedIcon />
          <h4>Like</h4>
        </div>
        <div className="react__opt">
          <ChatBubbleOutlineOutlinedIcon />
          <h4>Comment</h4>
        </div>
        <div className="react__opt">
          <ShareOutlinedIcon />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
}

export default Content;
