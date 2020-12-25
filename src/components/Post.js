import React, { useEffect, useState } from "react";
import "../css/Post.css";

// imported components
import StoryPanel from "../components/StoryPanel";
import MessageSender from "../components/MessageSender";
import Content from "../components/Content";
import db from "../Firebase";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div>
      {/*Add Story and Stories */}
      <StoryPanel />
      {/*Message Sender */}
      <MessageSender />
      {/* Add a Post */}

      {posts.map((post) => (
        <Content
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Post;
