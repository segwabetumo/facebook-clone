import React from "react";

// imported components
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/Subscriptions";
import StoreFrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForumIcon from "@material-ui/icons/Forum";
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      {/*l ogo plus search option */}
      <div className="header__left">
        <h3>facebook</h3>
        <div className="header__input">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search Facebook..." />
        </div>
      </div>
      {/* header navigation options */}
      <div className="header__middle">
        <div className="header__option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <StoreFrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Segwabe Tumo</h4>

          <IconButton>
            <AddIcon className="icon_btn" />
          </IconButton>

          <IconButton>
            <ForumIcon className="icon_btn" />
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon className="icon_btn" />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon className="icon_btn" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
