import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';


const Sidebar = () => {

    const [ showMenuIcon, setShowMenuIcon ] = useState(false);


    return (
        <div className={!showMenuIcon ? 'sidebar' : 'sidebar active'} >
            {/* twitter icon */}
            <TwitterIcon className='sidebar__twitterIcon' />
            <span className='sidebar__menuIconDiv'>
                {!showMenuIcon ? <MenuIcon className='sidebar__menuIcon' onClick={() => setShowMenuIcon(!showMenuIcon)} /> : <ClearIcon className='sidebar__ClearIcon' onClick={() => setShowMenuIcon(!showMenuIcon)}  /> }
            </span>

            {/* sidebar option Component */}
            <Link to='/' onClick={() => setShowMenuIcon(!showMenuIcon)} >
                <SidebarOptions text='Home' Icon={<HomeIcon  />} />
            </Link>
            

            <SidebarOptions text='Explore' Icon={<SearchIcon  />} />

            <SidebarOptions text='Notifications' Icon={<NotificationsIcon  />} />

            <SidebarOptions text='Messages' Icon={<MailOutlineIcon  />} />

            <Link to='/bookmarks' onClick={() => setShowMenuIcon(!showMenuIcon)} >
                <SidebarOptions text='Bookmarks' Icon={<BookmarkBorderIcon  />} />
            </Link>

            <SidebarOptions text='Lists' Icon={<ListAltIcon  />} />

            <SidebarOptions  text='Profile' Icon={<PersonOutlineIcon  />}  />

            <SidebarOptions text='More' Icon={<MoreHorizIcon  />} />

            <Button variant='outlined' className='sidebar__tweet' fullWidth > Tweet </Button>

           </div>
    )
}

export default Sidebar
