import { Grid, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import UserCard from '../../components/Users/UserCard'
import lib from '../../lib'


const { requests_reg } = lib
const { getUnconfirmedRequests, getNewestUsers } = requests_reg


function Dashboard() {
    const [unconfirmedRequests, setUnconfirmedRequests] = useState([])
    const [newestUsers, setNewestUsers] = useState([])

    const asyncWrapper = async () => {
        try {
            const res = await getUnconfirmedRequests()
            const resUsers = await getNewestUsers()

            if (res.status === 200 && resUsers.status === 200) {
                console.log('inside if')
                setUnconfirmedRequests(res.data.unconfirmedMedicalRequests)
                setNewestUsers(resUsers.data.users)

            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        asyncWrapper()
    }, [])
    return (
        <Container maxWidth="xl">
            <Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className="pl-3 mb-3">Newest members</Typography>
                    <Box>
                        {newestUsers.map((u, i) => <UserCard
                            key={i}
                            user={u}
                            name={u.name}
                            surname={u.surname}
                            avatar={u.avatar}
                            createdAt={u.createdAt}
                        />
                        )
                        }
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard
