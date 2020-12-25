import React from 'react'
import '../css/Header.css'

// imp comps
import SearchIcon from '@material-ui/icons/Search'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import StoreFrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'

function Header() {
    return (
        <div className="header">
            {/* the logo section */}
            <div className="left__header">
                <div className="header__logo">
                    <h3 className = "fbIcon">facebook</h3>
                </div>
                {/*search input */}
                <div className="header__search">
                    <SearchIcon className="searchIcon" />
                    <input type="text" placeholder="Search Facebook" className="inputS"/>
                </div>
            </div>
            {/* the nav section */}
            <div className="middle__header">
                <HomeOutlinedIcon  fontSize = "large" className="nav"/>
                <VideoLibraryOutlinedIcon  fontSize = "large" className="nav"/>
                <PeopleAltOutlined  fontSize = "large"  className="nav"/>
                <StoreFrontOutlinedIcon  fontSize = "large" className="nav"/>
                </div>
            {/* the acc section */}
            <div className="right__header">
                <div className="user">
                    <Avatar/>
                    <h5>Tumo</h5>
                    
                    <div className="user__sett">
                        <IconButton>
                            <AddIcon  className = "settIcon"/>
                        </IconButton>

                         <IconButton>
                            <ForumIcon  className = "settIcon"/>
                        </IconButton>

                         <IconButton>
                            <NotificationActiveIcon  className = "settIcon"/>
                        </IconButton>

                         <IconButton>
                            <ExpandMoreIcon className = "settIcon"/>
                        </IconButton>
                    </div>
            </div>
            </div>

        </div>
    )
}

export default Header
