import { Grid, Typography } from '@mui/material'
import React from 'react'
import DashboardAccordion from './DashboardAccordion'

function PersonalData({ isLoading, userData }) {
    const { name, surname, email, phone_primary, health_data } = userData
    return (
        <Grid container spacing={2} className="mt-2 pl-3">
            <DashboardAccordion title={'Personal'} details={[name, surname]} />
            <DashboardAccordion title={'Contact'} details={[email, phone_primary]} />
            <DashboardAccordion title={'Health information'} details={health_data} />
        </Grid>
    )
}

export default PersonalData
