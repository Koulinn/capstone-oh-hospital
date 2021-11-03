import React from 'react'
import List from '@mui/material/List';
import UserCard from './UserCard'


function UserList({ waitingList, setcurrentUserOnChat }) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            {waitingList.map(u =>
                <UserCard
                key={u._id}
                    user={u.user}
                    name={u.user.name}
                    surname={u.user.surname}
                    avatar={u.user.avatar}
                    setcurrentUserOnChat={setcurrentUserOnChat}
                />)}
        </List>
    )
}

export default UserList
