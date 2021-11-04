import React from 'react'
import ChatCard from "../../components/Chat/ChatCard";
import ChatHeader from './ChatHeader';
import ChatBottom from './ChatBottom';

function ChatColumn({ currentUserOnChat, currentMessageHistory }) {
  return (
    <div className="col-8 chat-wrapper px-0">
      <ChatHeader
        currentUserOnChat={currentUserOnChat}
      />
      <div className="scrollable-Area p-3 row mx-0">
        {currentMessageHistory.map(m => <ChatCard
          key={m._id}
          message={m}
          user={m.senderRole === 'user' ? true : false}
          img={m.files || null}
        />)}
      </div>
      <ChatBottom roomID={currentUserOnChat?._id} />

    </div>
  )
}

export default ChatColumn
