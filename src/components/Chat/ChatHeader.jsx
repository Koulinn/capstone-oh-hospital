import React from 'react'
import Avatar from '@mui/material/Avatar';

function ChatHeader({ mockUser }) {
    return (
        <div className=" chatUserMeta-wrapper d-flex align-items-center p-3">
            <div>
                <Avatar alt="Remy Sharp" src={mockUser.avatar} />
            </div>
            <div className="ml-3">
                <h6>{`${mockUser.name} ${mockUser.surname}`}</h6>
            </div>
        </div>
    )
}

export default ChatHeader
