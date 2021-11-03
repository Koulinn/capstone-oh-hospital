import React from 'react'
import Avatar from '@mui/material/Avatar';

function ChatHeader({ currentChat }) {
    return (
        <div className=" chatUserMeta-wrapper d-flex align-items-center p-3">
            {currentChat?
           <>
                <div>
                    <Avatar alt="Remy Sharp" src={currentChat.avatar} />
                </div>
                <div className="ml-3">
                    <h6>{`${currentChat.name} ${currentChat.surname}`}</h6>
                </div> 
           </>
            : ''}
        </div>
    )
}

export default ChatHeader
