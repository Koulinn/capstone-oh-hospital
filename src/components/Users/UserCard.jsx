import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function UserCard({name, surname, avatar, user, setcurrentUserOnChat}) {
    return (
        <>
            <ListItem onClick={()=>setcurrentUserOnChat(user)}>
                <ListItemAvatar>
                  <Avatar alt={name} src={avatar}>

                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${name} ${surname}`} secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
        </>
    )
}

export default UserCard
