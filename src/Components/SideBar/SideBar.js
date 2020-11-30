import React from 'react';
import './SideBar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat/SidebarChat';
const SideBar = () => {
    return (
        <div className="sideBar">

            <div className="sideBar__header">
                <Avatar src="https://manofmany.com/wp-content/uploads/2019/07/Leonardo-Dicaprio-in-Titanic-2-1.jpg"></Avatar>
                <div className="sideBar__headerRight">
                    <IconButton>
                        < DonutLargeIcon></ DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined></SearchOutlined>
                    <input type="text" placeholder="Search or Start newChat "/>
                </div>
            </div>
            <div className="sidebar__chats"> 
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            </div>
        </div>
    );
};

export default SideBar;