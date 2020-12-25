import React from "react";
import "../css/SidebarRow.css";

function SidebarRow({ title, Icon }) {
  return (
    <div className="sideBarRow">
      <div className="sideBarRow--icon">{Icon && <Icon />}</div>

      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
