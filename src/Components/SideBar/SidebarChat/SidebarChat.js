import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChart.css'
const SidebarChat = () => {
    return (
        <div className="sidebarChart">
            <Avatar></Avatar>
            <div className="sidebarChart__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;