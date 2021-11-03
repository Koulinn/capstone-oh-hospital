import React from 'react'
import List from '@mui/material/List';
import UserCard from './UserCard'


function UserList({ waitingList }) {
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
                    name={u.user.name}
                    surname={u.user.surname}
                    avatar={u.user.avatar}
                />)}
        </List>
    )
}

export default UserList
