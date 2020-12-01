import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar></Avatar>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">prince</span>
                    This is a message
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">prince</span>
                    This is a message
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">prince</span>
                    This is a message
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon></InsertEmoticon>
                <form>
                    <input placeholder="Type a message"/>
                    <button  type="submit" > Send a message</button>
                </form>
                <MicIcon></MicIcon>
            </div>
        </div>
    );
};

export default Chat;