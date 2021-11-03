import React from 'react'
import Avatar from '@mui/material/Avatar';

function ChatHeader({ currentUserOnChat }) {
    return (
        <div className=" chatUserMeta-wrapper d-flex align-items-center p-3">
            {currentUserOnChat?
           <>
                <div>
                    <Avatar alt={currentUserOnChat.name} src={currentUserOnChat.avatar} />
                </div>
                <div className="ml-3">
                    <h6>{`${currentUserOnChat.name} ${currentUserOnChat.surname}`}</h6>
                </div> 
           </>
            : ''}
        </div>
    )
}

export default ChatHeader
