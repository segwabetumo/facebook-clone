import React from "react";

//imported components
import "../css/Story.css";
import { Avatar } from "@material-ui/core";
function Story({ profilePic, image, title }) {
  return (
    <div className="story">
      <div style={{ backgroundImage: "url()" }}></div>
      <Avatar src={profilePic} />
      <h3>{title}</h3>
    </div>
  );
}

export default Story;
