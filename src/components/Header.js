import React from "react";
import "../css/Header.css";

// imp comps
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* the logo section */}
      <div className="left__header">
        <div className="header__logo">
          <h3 className="fbIcon">facebook</h3>
        </div>
        {/*search input */}
        <div className="header__search">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search Facebook" className="inputS" />
        </div>
      </div>
      {/* the nav section */}
      <div className="middle__header">
        <HomeRoundedIcon fontSize="large" className="nav" />
        <FlagRoundedIcon fontSize="large" className="nav" />
        <OndemandVideoRoundedIcon fontSize="large" className="nav" />
        <SupervisedUserCircleRoundedIcon fontSize="large" className="nav" />
      </div>
      {/* the acc section */}
      <div className="right__header">
        <div className="user">
          <Avatar src={user.photoURL} />
          <h5>{user.displayName}</h5>

          <div className="user__sett">
            <IconButton>
              <AddIcon className="settIcon" />
            </IconButton>

            <IconButton>
              <ForumIcon className="settIcon" />
            </IconButton>

            <IconButton>
              <NotificationActiveIcon className="settIcon" />
            </IconButton>

            <IconButton>
              <ExpandMoreIcon className="settIcon" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
