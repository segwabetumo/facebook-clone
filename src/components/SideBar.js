import React from "react";
import "../css/Sidebar.css";

//imported Components
import SideBarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

export default function SideBar() {
  return (
    <div className="sideBar">
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SideBarRow
        Icon={EmojiFlagsIcon}
        title="Pages"
        className="sideBar__option"
      />

      <SideBarRow Icon={PeopleIcon} title="Friends" />

      <SideBarRow Icon={ChatIcon} title="Messenger" />

      <SideBarRow Icon={StoreFrontIcon} title="Marketplace" />

      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
    </div>
  );
}
