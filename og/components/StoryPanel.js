import React from "react";

// imported components
import Story from "../components/Story";
import "../css/StoryPanel.css";

function StoryPanel() {
  return (
    <div className="storyPanel">
      <Story profilePic="../asserts/skull.png" title="Hey, What's Up Guys!!" />
      <Story profilePic="../asserts/skull.png" title="Hey, What's Up Guys!!" />
      <Story profilePic="../asserts/skull.png" title="Hey, What's Up Guys!!" />
    </div>
  );
}

export default StoryPanel;
