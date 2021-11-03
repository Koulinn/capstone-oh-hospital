import React from 'react'
import ChatCard from "../../components/Chat/ChatCard";
import { MdOutlineChatBubbleOutline, MdSend, MdOutlineAttachment } from 'react-icons/md'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ChatHeader from './ChatHeader';
import ChatBottom from './ChatBottom';

function ChatColumn({currentChat}) {
    return (
        <div className="col-8 chat-wrapper px-0">
          <ChatHeader
           currentChat={currentChat}
          />
          <div className="scrollable-Area p-3 row mx-0">
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard user={true} />
            <ChatCard />
            <ChatCard />

          </div>
          <ChatBottom/>

        </div>
    )
}

export default ChatColumn
