import React from 'react'
import List from '@mui/material/List';
import UserCard from './UserCard'


function UserList({ waitingList, setCurrentChat }) {
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
                    user={u.user}
                    name={u.user.name}
                    surname={u.user.surname}
                    avatar={u.user.avatar}
                    setCurrentChat={setCurrentChat}
                />)}
        </List>
    )
}

export default UserList
