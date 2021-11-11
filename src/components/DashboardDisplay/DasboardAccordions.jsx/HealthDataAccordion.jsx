import React from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function HealthDataAccordion({ details }) {
    const { health_condition, healthcarePlan, medicine_list, need_carer } = details
    return (
        <>
            <AccordionDetails>
                <Typography variant="h6">
                    Healthcare Plan
                </Typography>
                <Typography>
                   {healthcarePlan.length > 0 ? healthcarePlan : 'None'}
                </Typography>
            </AccordionDetails>
            <AccordionDetails>
                <Typography variant="h6">
                    Health Condition
                </Typography>
                <Typography>
                   {health_condition.length > 0 ? health_condition : 'None'}
                </Typography>
            </AccordionDetails>
            <AccordionDetails>
                <Typography variant="h6">
                    Medicine Taken
                </Typography>
                <Typography>
                   {medicine_list.length > 0 ? medicine_list : 'None'}
                </Typography>
            </AccordionDetails>
            <AccordionDetails>
                <Typography variant="h6">
                    Need Carer
                </Typography>
                <Typography>
                   {need_carer ? 'Yes' : 'No'}
                </Typography>
            </AccordionDetails>


        </>
    )
}

export default HealthDataAccordion
