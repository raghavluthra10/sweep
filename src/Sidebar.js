import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className='sidebar' >
            {/* twitter icon */}
            <TwitterIcon className='sidebar__twitterIcon' />

            {/* sidebar option Component */}
            <SidebarOptions  active text='Home' Icon={<HomeIcon  />} />

            <SidebarOptions text='Explore' Icon={<SearchIcon  />} />

            <SidebarOptions text='Notifications' Icon={<NotificationsIcon  />} />

            <SidebarOptions text='Messages' Icon={<MailOutlineIcon  />} />

            <SidebarOptions text='Bookmarks' Icon={<BookmarkBorderIcon  />} />

            <SidebarOptions text='Lists' Icon={<ListAltIcon  />} />

            <SidebarOptions  text='Profile' Icon={<PersonOutlineIcon  />}  />

            <SidebarOptions text='More' Icon={<MoreHorizIcon  />} />

            <Button variant='outlined' className='sidebar__tweet' fullWidth > Sweep </Button>

           </div>
    )
}

export default Sidebar
