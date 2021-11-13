import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import {format} from 'date-fns'

function UserCard({name, surname, avatar, user, setcurrentUserOnChat, createdAt, isSelected}) {
    return (
        <>
            <ListItem onClick={()=>setcurrentUserOnChat(user)} className={"cursor-pointer" + (isSelected ? ' Mui-selected' : '')}>
                <ListItemAvatar>
                  <Avatar alt={name} src={avatar}>

                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${name} ${surname}`} secondary={`Since: ${format(new Date(createdAt), 'PP')}`} />
              </ListItem>
              <Divider variant="inset" component="li" />
        </>
    )
}

export default UserCard
