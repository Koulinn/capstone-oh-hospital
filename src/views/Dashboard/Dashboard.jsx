import { Grid, Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserListDashboard from '../../components/Users/UserListDashboard'
import lib from '../../lib'
import TabsControl from '../../components/DashboardTabs/TabsControl'


const { requests_reg } = lib
const { getUnconfirmedRequests, getNewestUsers } = requests_reg


function Dashboard() {
    const [unconfirmedRequests, setUnconfirmedRequests] = useState([])
    const [newestUsers, setNewestUsers] = useState([])
    const [userID, setUserID] = useState(null)

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
        <Container maxWidth="xl" spacing={2}>
            <Grid container spacing={2}>
                <UserListDashboard
                    newestUsers={newestUsers}
                    setUserID={setUserID}
                />


                <Grid item xs={9}>
                    <TabsControl userID={userID?._id} />
                </Grid>
            </Grid>

        </Container>
    )
}

export default Dashboard
