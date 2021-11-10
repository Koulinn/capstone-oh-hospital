import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import UserCard from '../../components/Users/UserCard'

function UserListDashboard({ newestUsers, setUserID }) {

    return (
        <Grid item xs={3}>
            <Typography variant='h4' className="pl-3 mb-3">Newest members</Typography>
            <Box>
                {newestUsers.map((u, i) => <UserCard
                    key={i}
                    user={u}
                    name={u.name}
                    surname={u.surname}
                    avatar={u.avatar}
                    createdAt={u.createdAt}
                    setcurrentUserOnChat={setUserID}
                />
                )}
            </Box>
        </Grid>
    )
}

export default UserListDashboard
