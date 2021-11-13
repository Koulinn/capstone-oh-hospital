import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RequestAccordion from './DasboardAccordions.jsx/RequestAccordion'

function MedicalRequest({ userMedicalRequests, setUserMedicalRequests }) {
    const pendingRequests = userMedicalRequests.filter(r => !r.is_user_confirmed)
    const confirmedRequests = userMedicalRequests.filter(r => r.is_user_confirmed)
    return (
        <Grid container spacing={2} className="mt-2">
            <Grid item xs={12}>
                <Typography variant="h5">Pending Requests</Typography>
                {pendingRequests.length === 0 && <Typography variant="subtitle1">None</Typography>}
                {pendingRequests.map((r, index) =>
                    <RequestAccordion key={index} request={r} userMedicalRequests={userMedicalRequests} setUserMedicalRequests={setUserMedicalRequests}/>
                )}
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">Approved Requests</Typography>
                {confirmedRequests.length === 0 && <Typography variant="subtitle1">None</Typography>}
                {confirmedRequests.map((r, index) =>
                    <RequestAccordion key={index} request={r} />
                )}

            </Grid>
        </Grid>
    )

}

export default MedicalRequest
