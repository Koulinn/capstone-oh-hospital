import React from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function ContactAccordion({ details }) {
    return (
        <>
            {
                details.map((d, index) => {
                    const title = index === 0 ? 'Email' : 'Phone Primary'

                    return <AccordionDetails>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                        <Typography>
                            {d}
                        </Typography>
                    </AccordionDetails>

                })
            }
        </>
    )
}

export default ContactAccordion
