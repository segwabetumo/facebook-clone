import React from "react";
import "../css/Post.css";

// imported components
import StoryPanel from "../components/StoryPanel";
import MessageSender from "../components/MessageSender";

function Post() {
  return (
    <div>
      {/*Add Story and Stories */}
      <StoryPanel />
      {/*Message Sender */}
      <MessageSender />
      {/* Add a Post */}
    </div>
  );
}

export default Post;
